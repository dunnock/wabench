//! Worker compilable to wasm32-wasi target
/*  This is copy-paste from https://github.com/yewstack/yew/blob/master/src/agent.rs 
    as a PoC for compilation purpose. */

use yew::agent::{Agent, HandlerId, AgentScope, AgentLink, AgentUpdate, Responder, Public, FromWorker, ToWorker, Packed};
#[allow(unused_imports)]
use stdweb::{_js_impl, js};


/// Implements rules to register a worker in a separate thread.
pub trait ThreadedWASI {
    /// Executes an agent in the current environment.
    /// Uses in `main` function of a worker.
    fn register();
}

impl<T> ThreadedWASI for T
where
    T: Agent<Reach = Public>,
{
    fn register() {
        let scope = AgentScope::<T>::new();
        let responder = WASIResponder {};
        let link = AgentLink::connect(&scope, responder);
        let upd = AgentUpdate::Create(link);
        scope.send(upd);
        let handler = move |data: Vec<u8>| {
            let msg = ToWorker::<T::Input>::unpack(&data);
            match msg {
                ToWorker::Connected(id) => {
                    let upd = AgentUpdate::Connected(id);
                    scope.send(upd);
                }
                ToWorker::ProcessInput(id, value) => {
                    let upd = AgentUpdate::Input(value, id);
                    scope.send(upd);
                }
                ToWorker::Disconnected(id) => {
                    let upd = AgentUpdate::Disconnected(id);
                    scope.send(upd);
                }
                ToWorker::Destroy => {
                    let upd = AgentUpdate::Destroy;
                    scope.send(upd);
                    // TODO: replace with WASI kill
                    js! {
                        // Terminates web worker
                        self.close();
                    };
                }
            }
        };
        let loaded: FromWorker<T::Output> = FromWorker::WorkerLoaded;
        let loaded = loaded.pack();
        // TODO: replace with file handle
        js! {
            var handler = @{handler};
            self.onmessage = function(event) {
                handler(event.data);
            };
            self.postMessage(@{loaded});
        };
    }
}

struct WASIResponder {}

impl<AGN: Agent> Responder<AGN> for WASIResponder {
    fn response(&self, id: HandlerId, output: AGN::Output) {
        let msg = FromWorker::ProcessOutput(id, output);
        let data = msg.pack();
        // TODO: replace with file handle
        js! {
            var data = @{data};
            self.postMessage(data);
        };
    }
}

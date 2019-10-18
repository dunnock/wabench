//! Worker compilable to wasm32-wasi target
/*  This is copy-paste from https://github.com/yewstack/yew/blob/master/src/agent.rs 
    as a PoC for compilation purpose. */

use yew::agent::{Agent, HandlerId, AgentScope, AgentLink, AgentUpdate, Responder, Public, FromWorker, ToWorker, Packed};
use std::fs;
use std::io::{Read, Write};

/// Implements rules to register a worker in a separate thread.
pub trait ThreadedWASI {
    /// Executes an agent in the current environment.
    /// Uses in `main` function of a worker.
    fn run() -> std::io::Result<()>;
}

const OUTFILE: &'static str = "/output.bin";
const INFILE: &'static str = "/input.bin";

/*
thread_local! {
    static AGENTS_INBOX: RefCell<HashMap<TypeId, File>> = RefCell::new(HashMap::new());
}*/

#[cfg(target_os = "wasi")]
impl<T> ThreadedWASI for T
where
    T: Agent<Reach = Public>,
{
    fn run() -> std::io::Result<()> {
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
                    std::process::exit(1);
                }
            }
        };
        let loaded: FromWorker<T::Output> = FromWorker::WorkerLoaded;
        let loaded = loaded.pack();
        let mut output = fs::File::create(OUTFILE)?;
        output.write_all(&loaded)?;
        let mut input = fs::File::open(INFILE)?;
        loop {
            let mut buffer = [0; 1024];
            input.read(&mut buffer);
            println!("Worker got buf> {:?}", &buffer[0..31]);
            handler(buffer.to_vec());
            std::thread::sleep(std::time::Duration::new(0, 5000));
        };
        // TODO: process input messages via file handle
        Ok(())
    }
}

struct WASIResponder {}

#[cfg(target_os = "wasi")]
impl<AGN: Agent> Responder<AGN> for WASIResponder {
    fn response(&self, id: HandlerId, output: AGN::Output) {
        let msg = FromWorker::ProcessOutput(id, output);
        let data = msg.pack();
        // TODO: replace with file handle
        let mut output = fs::OpenOptions::new().append(true).open(OUTFILE)
            .expect("cannot open output file handle for appending");
        output.write_all(&data).expect("cannot append output message");
    }
}

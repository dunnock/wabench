//! Worker compilable to wasm32-wasi target
/*  This is copy-paste from https://github.com/yewstack/yew/blob/master/src/agent.rs 
    as a PoC for compilation purpose. */

use ::wasi::wasi_unstable as wasi;

use yew::agent::{Agent, HandlerId, AgentLink, AgentUpdate, Responder, Public, FromWorker, ToWorker, Packed};
use std::fs;
use std::io::{self, Read, Write};
pub use yew::agent::AgentScope;

/// Implements rules to register a worker in a separate thread.
pub trait ThreadedWASI<T: Agent> {
    /// Executes an agent in the current environment.
    /// Uses in `main` function of a worker.
    fn run() -> std::io::Result<AgentScope<T>>;
    fn handler(scope: &AgentScope<T>, data: Vec<u8>);
}

const OUTFILE: &'static str = "/output.bin";

/*
thread_local! {
    static AGENTS_INBOX: RefCell<HashMap<TypeId, File>> = RefCell::new(HashMap::new());
}*/

impl<T> ThreadedWASI<T> for T
where
    T: Agent<Reach = Public>,
{
    fn run() -> std::io::Result<AgentScope::<T>> {
        let scope = AgentScope::<T>::new();
        let responder = WASIResponder {};
        let link = AgentLink::connect(&scope, responder);
        let upd = AgentUpdate::Create(link);
        scope.send(upd);
        let loaded: FromWorker<T::Output> = FromWorker::WorkerLoaded;
        let loaded = loaded.pack();
        let mut output = fs::File::create(OUTFILE)?;
        output.write_all(&loaded)?;
        Ok(scope)
    }

    fn handler(scope: &AgentScope::<T>, data: Vec<u8>) {
//        let mut output = fs::File::create(OUTFILE).expect("file");
//        output.write_all(&data).expect("write");
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
    }
}

struct WASIResponder {}

impl<AGN: Agent> Responder<AGN> for WASIResponder {
    fn response(&self, id: HandlerId, output: AGN::Output) {
        let msg = FromWorker::ProcessOutput(id, output);
        let data = msg.pack();
        // TODO: replace with file handle
        let mut output = fs::OpenOptions::new().append(true).open(OUTFILE);
        let res = match output {
            Ok(mut file) => file.write_all(&data), //.expect("cannot append output message");
            Err(msg) => { eprintln!("worker error opening file {}", msg); Err(msg) }

        };
        println!("worker writing file {:?}", res);
        if let Err(msg) = res {
            eprintln!("worker error writing file {}", msg);
        }
//            .expect("cannot open output file handle for appending");
        
    }
}

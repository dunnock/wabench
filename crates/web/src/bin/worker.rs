use wabench_web::{runner::TestRunner, WasiWorker};
use wasi_worker_yew::*;

// This is WASI specific implementation, which will not work under regular shell

fn main() {
    // In WASI setup output will go to /output.bin
    // It will not work when instantiated from shell though!
    let opt = ServiceOptions::default();
    ServiceWorker::initialize(opt).expect("ServiceWorker::initialize");

    // Following will create and initialize Agent
    let agent = WASIAgent::<TestRunner<WasiWorker>>::new();
    // It will run ThreadedWASI::run() to start Agent in WASI compatible context
    agent.run().expect("Agent run");

    // Attach Agent to ServiceWorker as message handler singleton
    ServiceWorker::set_message_handler(Box::new(agent));
}

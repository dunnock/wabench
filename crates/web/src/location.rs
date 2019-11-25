use yew::agent;

pub trait Location {
    type Reach: agent::Discoverer;
    fn url() -> &'static str;
}

pub struct WasiWorker;
impl Location for WasiWorker {
    type Reach = agent::Public;
    fn url() -> &'static str {
        "wasi/worker.js"
    }
}

pub struct StdwebWorker;
impl Location for StdwebWorker {
    type Reach = agent::Public;
    fn url() -> &'static str {
        "stdweb/stdweb-worker.js"
    }
}

pub struct EmbeddedWorker;
impl Location for EmbeddedWorker {
    type Reach = agent::Context;
    fn url() -> &'static str {
        "main.js"
    }
}

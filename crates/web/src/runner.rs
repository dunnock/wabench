use yew::agent;
use serde::{Serialize, Deserialize};
use wabench::{tests::Tests, WASMTest};

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

pub struct TestRunner<L: 'static+Location> {
    link: agent::AgentLink<TestRunner<L>>
}

#[derive(Serialize, Deserialize, Debug)]
pub enum Request {
    RunTest(Tests),
}

#[derive(Serialize, Deserialize, Debug)]
pub enum Response {
    TestCompleted(TestResult),
    TestInitialized(Tests),
}

#[derive(Serialize, Deserialize, Debug)]
pub struct TestResult {
    pub test: Tests,
    pub time: u64,
}

impl<L: 'static+Location> agent::Agent for TestRunner<L> {
//    #[cfg(any(target_os="wasi",threaded))]
    type Reach = L::Reach;
//    #[cfg(not(any(target_os="wasi",threaded)))]
//    type Reach = yew::agent::Context;
    type Message = String;
    type Input = Request;
    type Output = Response;

    // Create an instance with a link to agent's environment.
    fn create(link: agent::AgentLink<Self>) -> Self {
        TestRunner { link }
    }

    // Handle inner messages (of services of `send_back` callbacks)
    fn update(&mut self, _msg: Self::Message) { /* ... */ }

    // Handle incoming messages from components of other agents.
    fn handle(&mut self, msg: Self::Input, who: agent::HandlerId) {
        match msg {
            Request::RunTest(test) => {
                let instance = test.init();
                self.link.response(who, Response::TestInitialized(test.clone()));
                let time = instance.benchmark() as u64;
                self.link.response(who, Response::TestCompleted(TestResult{ test, time }));
            },
        }
    }

    fn name_of_resource() -> &'static str {
        L::url() // "wasi/worker.js"
    }
}

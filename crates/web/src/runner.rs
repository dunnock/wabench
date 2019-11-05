#[cfg(target_os="wasi")]
use wasi_worker_yew::*;
#[cfg(not(target_os="wasi"))]
use yew::agent::*;
use serde::{Serialize, Deserialize};
use wabench::{tests::Tests, WASMTest};


pub struct TestRunner{
  link: AgentLink<TestRunner>,
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

pub enum Msg {}

#[derive(Serialize, Deserialize, Debug)]
pub struct TestResult {
  pub test: Tests,
  pub time: u64,
}

impl Agent for TestRunner {
//    #[cfg(any(target_os="wasi",threaded))]
    type Reach = Public;
//    #[cfg(not(any(target_os="wasi",threaded)))]
//    type Reach = yew::agent::Context;
    type Message = Msg;
    type Input = Request;
    type Output = Response;

    // Create an instance with a link to agent's environment.
    fn create(link: AgentLink<Self>) -> Self {
        TestRunner { link }
    }

    // Handle inner messages (of services of `send_back` callbacks)
    fn update(&mut self, _msg: Self::Message) { /* ... */ }

    // Handle incoming messages from components of other agents.
    fn handle(&mut self, msg: Self::Input, who: HandlerId) {
        match msg {
            Request::RunTest(test) => {
                let instance = test.init();
                self.link.response(who, Response::TestInitialized(test.clone()));
                let time = instance.benchmark() as u64;
                self.link.response(who, Response::TestCompleted(TestResult{ test, time }));
            },
        }
    }

    #[cfg(target_os="wasi")]
    fn name_of_resource() -> &'static str {
        "wasi/worker.js"
    }

    #[cfg(not(target_os="wasi"))]
    fn name_of_resource() -> &'static str {
        "stdweb/stdweb-worker.js"
    }
}

use serde::{Serialize, Deserialize};
use wasi_worker_yew::*;
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

impl<R: yew::agent::Discoverer> Agent for TestRunner {
    type Reach = R;
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

    #[cfg(feature="threaded")]
    fn name_of_resource() -> &'static str {
        "bin/worker.wasm"
    }
}

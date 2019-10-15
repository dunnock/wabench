use serde::{Serialize, Deserialize};
use yew::worker::*;
use wabench::{tests::Tests, WASMTest};


pub struct TestRunner {
  link: AgentLink<TestRunner>,
}

#[derive(Serialize, Deserialize, Debug)]
pub enum Request {
  RunTest(Tests),
}
impl Transferable for Request {}

#[derive(Serialize, Deserialize, Debug)]
pub enum Response {
  TestCompleted(TestResult),
  TestInitialized(Tests),
}
impl Transferable for Response {}

pub enum Msg {}

#[derive(Serialize, Deserialize, Debug)]
pub struct TestResult {
  pub test: Tests,
  pub time: u128,
}

impl Agent for TestRunner {
    // Available:
    // - `Job` (one per bridge on the main thread)
    // - `Context` (shared in the main thread)
    // - `Private` (one per bridge in a separate thread)
    // - `Public` (shared in a separate thread)
    #[cfg(features="threaded")]
    type Reach = Public; // Spawn only one instance on the main thread (all components can share this agent)
    #[cfg(not(features="threaded"))]
    type Reach = Context; // Spawn only one instance on the main thread (all components can share this agent)
    type Message = Msg;
    type Input = Request;
    type Output = Response;

    // Create an instance with a link to agent's environment.
    fn create(link: AgentLink<Self>) -> Self {
        TestRunner { link }
    }

    // Handle inner messages (of services of `send_back` callbacks)
    fn update(&mut self, msg: Self::Message) { /* ... */ }

    // Handle incoming messages from components of other agents.
    fn handle(&mut self, msg: Self::Input, who: HandlerId) {
        match msg {
            Request::RunTest(test) => {
                let instance = test.init();
                self.link.response(who, Response::TestInitialized(test.clone()));
                let time = instance.benchmark();
                self.link.response(who, Response::TestCompleted(TestResult{ test, time }));
            },
        }
    }
}

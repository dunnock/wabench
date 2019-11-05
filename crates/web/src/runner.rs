use yew::agent;
use super::{Location, Request, Response, TestResult};
use wabench::WASMTest;

#[derive(Debug, Clone, PartialEq)]
pub enum RunnerImpl {
  Wasi,
  Stdweb,
  Embedded
}

impl RunnerImpl {
  const RUNNERS: [Self; 3] = [Self::Wasi, Self::Stdweb, Self::Embedded];
  /// Return list of available tests enum
  pub fn list() -> Vec<Self> {
    Self::RUNNERS.to_vec()
  }
}

impl ToString for RunnerImpl {
  fn to_string(&self) -> String {
      match self {
        RunnerImpl::Wasi => "wasi worker (separate thread)".to_string(),
        RunnerImpl::Stdweb => "stdweb worker (separate thread)".to_string(),
        RunnerImpl::Embedded => "embedded (same thread)".to_string(),
     }
   }
}

pub struct TestRunner<L: 'static+Location> {
    link: agent::AgentLink<TestRunner<L>>
}


impl<L: 'static+Location> agent::Agent for TestRunner<L> {
    type Reach = L::Reach;
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
        L::url()
    }
}

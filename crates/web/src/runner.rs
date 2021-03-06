use super::data::*;
use super::Location;
use yew::agent;

pub struct TestRunner<L: 'static + Location> {
    link: agent::AgentLink<TestRunner<L>>,
}

impl<L: 'static + Location> agent::Agent for TestRunner<L> {
    type Reach = L::Reach;
    type Message = String;
    type Input = Request;
    type Output = Response;

    // Create an instance with a link to agent's environment.
    fn create(link: agent::AgentLink<Self>) -> Self {
        TestRunner { link }
    }

    // Handle inner messages (of services of `send_back` callbacks)
    fn update(&mut self, _msg: Self::Message) { /* ... */
    }

    // Handle incoming messages from components of other agents.
    fn handle_input(&mut self, msg: Self::Input, who: agent::HandlerId) {
        match msg {
            Request::RunTest(test, runner) => {
                let instance = test.init();
                self.link
                    .respond(who, Response::TestInitialized(test.clone(), runner.clone()));
                let time = instance.benchmark() as u64;
                self.link.respond(
                    who,
                    Response::TestCompleted(runner, TestResult { test, time }),
                );
            }
        }
    }

    fn name_of_resource() -> &'static str {
        L::url()
    }
}

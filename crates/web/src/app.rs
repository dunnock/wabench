use wabench::tests::Tests;
use yew::{html, Component, ComponentLink, Html, ShouldRender, Bridge};
use yew::components::Select;
use yew::agent::Bridged;
use super::runner;

pub struct State {
  selected: Option<Tests>,
  running: Option<Tests>,
  initialized: Option<Tests>,
  completed: Option<runner::TestResult>
}

pub struct App {
  state: State,
  runner: Box<dyn Bridge<runner::TestRunner>>,
}

pub enum Msg {
  SelectTest(Tests),
  StartTest,
  TestResult(runner::Response),
}

impl Component for App {
  type Message = Msg;
  type Properties = ();

  fn create(_: Self::Properties, mut link: ComponentLink<Self>) -> Self {
    let callback = link.send_back(|res| Msg::TestResult(res));
    // `bridge` spawns an instance if no one is available
    let runner = runner::TestRunner::bridge(callback); // Connected! :tada:
    App {
      state: State {
        running: None,
        selected: None,
        initialized: None,
        completed: None
      },
      runner
    }
  }

  fn update(&mut self, msg: Self::Message) -> ShouldRender {
    match msg {
      Msg::SelectTest(test) => {
        self.state.selected = Some(test);
      },
      Msg::StartTest => {
        self.state.running = self.state.selected.clone();
        if let Some(test) = &self.state.selected {
          self.runner.send(runner::Request::RunTest(test.clone()));
        }
      },
      Msg::TestResult(runner::Response::TestCompleted(result)) => {
        self.state.running = None;
        self.state.completed = Some(result);
      },
      Msg::TestResult(runner::Response::TestInitialized(test)) => {
        self.state.initialized = Some(test);
      }
    };
    true
  }

  fn view(&self) -> Html<Self> {
    html! {
      <div>
        <Select<Tests> options=Tests::list() onchange=|test| Msg::SelectTest(test) />
        <button onclick=|_| Msg::StartTest disabled=self.state.selected.is_none()>{ "start test"}</button>
        <div>
        { if let Some(test) = &self.state.running { format!("Running test {}", test.to_string()) } else { "".to_string() } }
        </div>
        <div>
        { if let Some(test) = &self.state.initialized { format!("Test {} data initialized", test.to_string()) } else { "".to_string() } }
        </div>
        <div>
        { if let Some(bench) = &self.state.completed { format!("Completed test {} with average time {}ns", bench.test.to_string(), bench.time) } else { "".to_string() } }
        </div>
      </div>
    }
  }
}
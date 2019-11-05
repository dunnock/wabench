use wabench::tests::Tests;
use yew::{html, Component, ComponentLink, Html, ShouldRender};
use yew::components::Select;
use super::{runner::RunnerImpl, Request, Response, TestResult};
use super::runners::*;

pub struct State {
  selected: Option<Tests>,
  running: Option<Tests>,
  initialized: Option<Tests>,
  completed: Option<TestResult>,
  runner: RunnerImpl
}

pub struct App {
  state: State,
  runners: Runners
}

pub enum Msg {
  SelectTest(Tests),
  SelectRunner(RunnerImpl),
  StartTest,
  TestResult(Response),
}

impl Component for App {
  type Message = Msg;
  type Properties = ();

  fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {
    App {
      state: State {
        running: None,
        selected: None,
        initialized: None,
        completed: None,
        runner: RunnerImpl::Embedded,
      },
      runners: Runners::init(link)
    }
  }

  fn update(&mut self, msg: Self::Message) -> ShouldRender {
    match msg {
      Msg::SelectTest(test) => {
        self.state.selected = Some(test);
      },
      Msg::SelectRunner(runner) => {
        self.state.runner = runner;
      },
      Msg::StartTest => {
        self.state.running = self.state.selected.clone();
        if let Some(test) = &self.state.selected {
          self.runners.send(&self.state.runner, Request::RunTest(test.clone()));
        }
      },
      Msg::TestResult(Response::TestCompleted(result)) => {
        self.state.running = None;
        self.state.completed = Some(result);
      },
      Msg::TestResult(Response::TestInitialized(test)) => {
        self.state.initialized = Some(test);
      }
    };
    true
  }

  fn view(&self) -> Html<Self> {
    html! {
      <div>
        <Select<RunnerImpl> options=RunnerImpl::list() onchange=|runner| Msg::SelectRunner(runner) />
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
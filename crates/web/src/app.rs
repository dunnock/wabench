use wabench::tests::Tests;
use yew::{html, Component, ComponentLink, Html, ShouldRender, Bridge};
use yew::components::Select;
use yew::agent::Bridged;
use super::runner::*;

pub struct State {
  selected: Option<Tests>,
  running: Option<Tests>,
  initialized: Option<Tests>,
  completed: Option<TestResult>,
  runner: RunnerImpl
}

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



struct Runners {
  wasi: Box<dyn Bridge<TestRunner<WasiWorker>>>,
  stdweb: Box<dyn Bridge<TestRunner<StdwebWorker>>>,
  embedded: Box<dyn Bridge<TestRunner<EmbeddedWorker>>>,
}

impl Runners {
  fn init(mut link: ComponentLink<App>) -> Self {
    let callback_wasi = link.send_back(|res| Msg::TestResult(res));
    let callback_stdweb = link.send_back(|res| Msg::TestResult(res));
    let callback_embedded = link.send_back(|res| Msg::TestResult(res));
    // spawns an instance of each runner
    Self {
      wasi: TestRunner::<WasiWorker>::bridge(callback_wasi),
      stdweb: TestRunner::<StdwebWorker>::bridge(callback_stdweb),
      embedded: TestRunner::<EmbeddedWorker>::bridge(callback_embedded)
    }
  }
  fn send(&mut self, kind: &RunnerImpl, request: Request) {
    match kind {
      RunnerImpl::Wasi => self.wasi.send(request),
      RunnerImpl::Stdweb => self.stdweb.send(request),
      RunnerImpl::Embedded => self.embedded.send(request),
    }
  }
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
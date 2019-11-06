use wabench::tests::Tests;
use yew::{html, Component, ComponentLink, Html, ShouldRender};
use super::data::*;
use super::runners::*;


pub struct State {
  running: Option<Tests>,
  initialized: Option<Tests>,
  completed: Option<TestResult>,
  tests: TestRunsState
}

pub struct App {
  state: State,
  runners: Runners
}

#[derive(Clone)]
pub enum Msg {
  StartTest(Tests, RunnerImpl),
  TestResult(Response),
}

impl RunnerImpl {
  pub fn list() -> Vec<RunnerImpl> {
    vec![RunnerImpl::Wasi, RunnerImpl::Stdweb, RunnerImpl::Embedded]
  }
  pub fn header(&self) -> String {
    match self {
      RunnerImpl::Wasi => "WASI worker".to_string(),
      RunnerImpl::Stdweb => "Stdweb worker".to_string(),
      RunnerImpl::Embedded => "Embedded".to_string(),
    }
  }
  pub fn description(&self) -> Html<App> {
    match self {
      RunnerImpl::Wasi => html! { 
        <>
          { "Tests compiled to" }
          <strong>{ " wasm32-wasi " }</strong>
          { "target, wrapped by " }
          <a href="https://crates.io/crates/wasi-worker">{ "wasi-worker" }</a> 
          { " running in " }
          <a href="https://www.npmjs.com/package/@wasmer/wasi"> { "@wasmer/wasi" } </a>
          { " runtime in a browser service worker." }
        </>
      },
      RunnerImpl::Stdweb => html! { 
        <>
          { "Tests compiled to" } 
          <strong>{ " wasm32-unknown-unknown " }</strong>
          { "target, executed by " }
          <a href="https://crates.io/crates/stdweb">{ "stdweb" }</a>
          { " runtime in a browser service worker." }
        </>
      },
      RunnerImpl::Embedded =>  html! { 
        <>
          { "Tests compiled to" }
          <strong>{ " wasm32-unknown-unknown " }</strong>
          { "target, executed by " }
          <a href="https://crates.io/crates/stdweb">{ "stdweb" }</a>
          { " runtime in the same application thread " } 
          { "(tests will freeze UI experience while running)." }
        </>
      }
    }
  }
  fn headers() -> Html<App> {
    let display_item = |item: &RunnerImpl| { html! { <th> { item.header() } </th> } };
    html! {
      <>
        { RunnerImpl::list().iter().map(display_item).collect::<Html<App>>() }
      </>
    }
  }
  fn descriptions() -> Html<App> {
    let display_item = |item: &RunnerImpl| { html! { <td> { item.description() } </td> } };
    html! {
      <>
        { RunnerImpl::list().iter().map(display_item).collect::<Html<App>>() }
      </>
    }
  }
  fn runners(test: &Tests) -> Html<App> {
    let display_item = |test: &Tests, runner: &RunnerImpl| {
      let msg = Msg::StartTest(test.clone(), runner.clone());
      html! { 
        <td> 
          <button onclick=|_| msg.clone() class="btn">{ "start test"}</button>
        </td>
      }
    };
    html! {
      <>
        { RunnerImpl::list().iter().map(|runner| display_item(test, runner)).collect::<Html<App>>() }
      </>
    }
  }
}


impl Component for App {
  type Message = Msg;
  type Properties = ();

  fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {
    App {
      state: State {
        running: None,
        initialized: None,
        completed: None,
        tests: TestRunsState::new()
      },
      runners: Runners::init(link)
    }
  }

  fn update(&mut self, msg: Self::Message) -> ShouldRender {
    match msg {
      Msg::StartTest(test, runner) => {
        self.state.running = Some(test.clone());
        self.runners.send(&runner, Request::RunTest(test, runner.clone()));
      },
      Msg::TestResult(Response::TestCompleted(runner, result)) => {
        self.state.running = None;
        self.state.completed = Some(result);
      },
      Msg::TestResult(Response::TestInitialized(test, runner)) => {
        self.state.initialized = Some(test);
      }
    };
    true
  }

  fn view(&self) -> Html<Self> {
    let test_row = |test: &Tests| html! {
      <tr>
        <th>{ test.to_string() }</th>
        { RunnerImpl::runners(&test) }
      </tr>
    };
    html! {
      <div class="container">
        <h1> {"WASM benchmarks"} </h1>
        <table class="table">
          <thead>
            <tr>
              <th>{"Test"}</th>
              { RunnerImpl::headers() }
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{"Information"}</th>
              { RunnerImpl::descriptions() }
            </tr>
            { Tests::list().iter().map(test_row).collect::<Html<App>>() }
          </tbody>
        </table>
        
        <div class="row">
        { if let Some(test) = &self.state.running { format!("Running test {}", test.to_string()) } else { "".to_string() } }
        </div>
        <div class="row">
        { if let Some(test) = &self.state.initialized { format!("Test {} data initialized", test.to_string()) } else { "".to_string() } }
        </div>
        <div class="row">
        { if let Some(bench) = &self.state.completed { format!("Completed test {} with average time {}ns", bench.test.to_string(), bench.time) } else { "".to_string() } }
        </div>
      </div>
    }
  }
}
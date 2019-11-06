use wabench::tests::Tests;
use yew::{html, Component, ComponentLink, Html, ShouldRender};
use super::data::*;
use super::runners::*;


pub struct State {
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
  fn render_items<DF>(f: DF) -> Html<App>
    where DF: Fn(RunnerImpl)->Html<App> 
  {
    html! {
      <>
        { RunnerImpl::list().into_iter().map(f).collect::<Html<App>>() }
      </>
    }
  }
  fn headers() -> Html<App> {
    Self::render_items(
      |item| { html! { <th> { item.header() } </th> } }
    )
  }
  fn descriptions() -> Html<App> {
    Self::render_items(
      |item| { html! { <td> { item.description() } </td> } }
    )
  }
  fn runners(test: Tests) -> Html<App> {
    Self::render_items(
      |runner| {
        let msg = Msg::StartTest(test, runner);
        html! { 
          <td> 
            <button onclick=|_| msg.clone() class="btn">{ "start test"}</button>
          </td>
        }
      }
    )
  }
  fn results(test: Tests, tests: &TestRunsState) -> Html<App> {
    Self::render_items(
      |runner| {
        html! { 
          <td> 
            { tests.get(test, runner).map(|record| record.render()).unwrap_or("".into()) }
          </td>
        }
      }
    )
  }
}


impl TestRunState {
  pub fn render(&self) -> Html<App> {
    let empty = || html! {};
    let in_div = |s: String| html! { <div>{s}</div> };
    html!{
      <>
        { if self.pending { "pending..." } else { "" } }
        { if self.initialized { in_div("data initialized...".into()) } else { empty() } }
        { if let Some(result) = &self.completed { 
          in_div(format!("completed with avg time ~ {} ms", result.time/1_000_000)) 
        } else { empty() } }
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
        tests: TestRunsState::new()
      },
      runners: Runners::init(link)
    }
  }

  fn update(&mut self, msg: Self::Message) -> ShouldRender {
    match msg {
      Msg::StartTest(test, runner) => {
        self.state.tests.log_request(test, runner);
        self.runners.send(&runner, Request::RunTest(test, runner));
      },
      Msg::TestResult(response) => {
        self.state.tests.log_response(response);
      }
    };
    true
  }

  fn view(&self) -> Html<Self> {
    let test_row = |test: Tests| html! {
      <>
        <tr>
          <th rowspan={"2"}>{ test.to_string() }</th>
          { RunnerImpl::runners(test) }
        </tr>
        <tr>
          { RunnerImpl::results(test, &self.state.tests) }
        </tr>
      </>
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
            { Tests::list().into_iter().map(test_row).collect::<Html<App>>() }
          </tbody>
        </table>
      </div>
    }
  }
}
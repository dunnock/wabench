use wabench::tests::Tests;
use yew::{html, Component, ComponentLink, Html, ShouldRender};
use super::data::*;
use super::runners::*;

const TITLE_TEXT: &'static str = "WASM browser benchmarks";
const MOTIVATION_TEXT: &'static str = r#"
  There are many WebAssembly performance results published, 
  though most of those performed on a limited set of devices 
  and/or browsers. Secondary, many benchmarks actually include 
  data initialization time and time taken by context outside
  of actual benchmarked code. In this project we will focus on 
  measuring pure WebAssembly code execution timings, not including 
  context and data initialization.
"#;

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
          <th rowspan={"2"}><pre>{ test.to_string() }</pre></th>
          { RunnerImpl::runners(test) }
        </tr>
        <tr>
          { RunnerImpl::results(test, &self.state.tests) }
        </tr>
      </>
    };
    html! {
      <div class="container">
        <h1> { TITLE_TEXT } </h1>
        <table class="table table-responsive table-striped">
          <caption> { MOTIVATION_TEXT } </caption>
          <thead>
            <tr>
              <th>{"Environment"}</th>
              { RunnerImpl::headers() }
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
              { RunnerImpl::descriptions() }
            </tr>
            { Tests::list().into_iter().map(test_row).collect::<Html<App>>() }
          </tbody>
        </table>
      </div>
    }
  }
}
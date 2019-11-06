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
        <tr class="info">
          { RunnerImpl::results(test, &self.state.tests) }
        </tr>
      </>
    };
    html! {
      <div class="container">
        <h1> {"WASM browser benchmarks"} </h1>
        <table class="table table-responsive">
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
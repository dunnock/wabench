use super::data::*;
use super::runners::*;
use wabench::tests::Tests;
use yew::{html, Component, ComponentLink, Html, ShouldRender};

const TITLE_TEXT: &'static str = "WASM browser benchmarks";
fn motivation() -> Html<App> {
    html! {
      <>
        <p>
        { r#"This benchmark is focused on measuring pure WebAssembly code execution
        timings, it does not include context and data initialization, 
        e.g. function execution measured from within WASM module exactly 
        around test function. It represents workloads heavy on memory usage and
        calculation - think of video transcoding, image processing, archiving,
        machine learning, physics etc."# }
        </p>
        <p>
        {  r#"Secondary it allows us to compare data from range of real web devices, browsers,
          to get a real web heterogenous picture - community driven benchmark!"# }
        </p>
        <p>
        { "Have idea of any good test addition - " }
          <a href="https://github.com/dunnock/wabench/">{ "PRs are welcome!" }</a>
        </p>
      </>
    }
}

pub struct State {
    tests: TestRunsState,
}

pub struct App {
    state: State,
    runners: Runners,
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
                tests: TestRunsState::new(),
            },
            runners: Runners::init(link),
        }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::StartTest(test, runner) => {
                self.state.tests.log_request(test, runner);
                self.runners.send(&runner, Request::RunTest(test, runner));
            }
            Msg::TestResult(response) => {
                self.state.tests.log_response(response);
            }
        };
        true
    }

    fn view(&self) -> Html<Self> {
        let test_row = |test: Tests| {
            html! {
              <>
                <tr>
                  <th rowspan={"2"}><pre class="scalable">{ test.to_string() }</pre></th>
                  { RunnerImpl::runners(test) }
                </tr>
                <tr>
                  { RunnerImpl::results(test, &self.state.tests) }
                </tr>
              </>
            }
        };
        html! {
          <div class="container">
            <h1> { TITLE_TEXT } </h1>
            <table class="table table-responsive table-striped">
              <caption> { motivation() } </caption>
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

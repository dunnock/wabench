use super::*;
use crate::app::{App, Msg};
use yew::{html, Html};
use wabench::tests::Tests;


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
  pub fn headers() -> Html<App> {
    Self::render_items(
      |item| { html! { <th> { item.header() } </th> } }
    )
  }
  pub fn descriptions() -> Html<App> {
    Self::render_items(
      |item| { html! { <td class="description"> { item.description() } </td> } }
    )
  }
  pub fn runners(test: Tests) -> Html<App> {
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
  pub fn results(test: Tests, tests: &TestRunsState) -> Html<App> {
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
        { if let Some(result) = &self.completed { 
            in_div(format!("completed with avg time ~ {} ms", result.time/1_000_000)) 
          } else if self.initialized { 
            in_div("data initialized...".into()) 
          } else { empty() } 
        }
      </>
    }
  }
}

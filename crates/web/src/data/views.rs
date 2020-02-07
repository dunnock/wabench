use super::*;
use crate::app::{App, Msg};
use wabench::tests::Tests;
use yew::{html, Html, ComponentLink};

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
    pub fn description(&self) -> Html {
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
            RunnerImpl::Embedded => html! {
              <>
                { "Tests compiled to" }
                <strong>{ " wasm32-unknown-unknown " }</strong>
                { "target, executed by " }
                <a href="https://crates.io/crates/stdweb">{ "stdweb" }</a>
                { " runtime in the same application thread " }
                { "(tests will freeze UI experience while running)." }
              </>
            },
        }
    }
    fn render_items<DF>(f: DF) -> Html
    where
        DF: Fn(RunnerImpl) -> Html,
    {
        html! {
          <>
            { RunnerImpl::list().into_iter().map(f).collect::<Html>() }
          </>
        }
    }
    pub fn headers() -> Html {
        Self::render_items(|item| {
            html! { <th> { item.header() } </th> }
        })
    }
    pub fn descriptions() -> Html {
        Self::render_items(|item| {
            html! { <td class="description"> { item.description() } </td> }
        })
    }
    pub fn runners(link: ComponentLink<App>, test: Tests) -> Html {
        Self::render_items(|runner| {
            let onclick = link.callback(move |_| Msg::StartTest(test, runner));
            html! {
              <td>
                <button onclick=onclick class="btn">{ "start test"}</button>
              </td>
            }
        })
    }
    pub fn results(test: Tests, tests: &TestRunsState) -> Html {
        Self::render_items(|runner| {
            html! {
              <td>
                { tests.get(test, runner).map(|record| record.render()).unwrap_or("".into()) }
              </td>
            }
        })
    }
}

impl TestRunState {
    pub fn render(&self) -> Html {
        let empty = || html! {};
        let in_div = |s: String| html! { <div>{s}</div> };
        html! {
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

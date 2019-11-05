use yew::{ComponentLink, Bridge};
use yew::agent::Bridged;
use super::{WasiWorker, StdwebWorker, EmbeddedWorker, Request};
use super::runner::*;
use super::app::{App, Msg};

pub struct Runners {
  wasi: Box<dyn Bridge<TestRunner<WasiWorker>>>,
  stdweb: Box<dyn Bridge<TestRunner<StdwebWorker>>>,
  embedded: Box<dyn Bridge<TestRunner<EmbeddedWorker>>>,
}

impl Runners {
  pub fn init(mut link: ComponentLink<App>) -> Self {
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
  pub fn send(&mut self, kind: &RunnerImpl, request: Request) {
    match kind {
      RunnerImpl::Wasi => self.wasi.send(request),
      RunnerImpl::Stdweb => self.stdweb.send(request),
      RunnerImpl::Embedded => self.embedded.send(request),
    }
  }
}

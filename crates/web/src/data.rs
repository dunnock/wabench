use serde::{Serialize, Deserialize};
use wabench::tests::Tests;
use std::collections::HashMap;

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Hash, Eq)]
pub enum RunnerImpl {
  Wasi,
  Stdweb,
  Embedded
}

#[derive(Serialize, Deserialize, Debug)]
pub enum Request {
    RunTest(Tests, RunnerImpl),
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum Response {
    TestCompleted(RunnerImpl, TestResult),
    TestInitialized(Tests, RunnerImpl),
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct TestResult {
    pub test: Tests,
    pub time: u64,
}

pub struct TestRunState {
  runner: RunnerImpl,
  test: Tests,
  pending: bool,
  initialized:  bool,
  completed: Option<TestResult>
}

impl TestRunState {
  pub fn new(test: Tests, runner: RunnerImpl, pending: bool, initialized: bool, completed: Option<TestResult>) -> Self {
    Self { runner, test, pending, initialized, completed }
  }
}


pub struct TestRunsState {
  data: HashMap<(Tests, RunnerImpl), TestRunState>
} 

impl TestRunsState {
  pub fn new() -> Self {
    Self {
      data: HashMap::new()
    }
  }
  pub fn log_request(&mut self, test: Tests, runner: RunnerImpl) {
    let key = (test.clone(), runner.clone());
    self.data.insert(key, TestRunState::new(test, runner, true, false, None));
  }
  pub fn log_response(&mut self, response: Response) {
    let record = match response {
      Response::TestCompleted(runner, result) => {
        TestRunState::new(result.test.clone(), runner, false, true, Some(result))
      },
      Response::TestInitialized(test, runner) => {
        TestRunState::new(test, runner, false, true, None)
      }
    };
    let key = (record.test.clone(), record.runner.clone());
    self.data.insert(key, record);
  }
}
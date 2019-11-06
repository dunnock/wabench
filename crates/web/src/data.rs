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
  running: bool,
  initialized:  bool,
  completed: Option<TestResult>
}


pub struct TestRunsLog {
  data: HashMap<(Tests, RunnerImpl), TestRunState>
} 

impl TestRunsLog {
  pub fn new() -> Self {
    Self {
      data: HashMap::new()
    }
  }
}
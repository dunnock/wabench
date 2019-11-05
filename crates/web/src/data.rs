use serde::{Serialize, Deserialize};
use wabench::tests::Tests;

#[derive(Serialize, Deserialize, Debug)]
pub enum Request {
    RunTest(Tests),
}

#[derive(Serialize, Deserialize, Debug)]
pub enum Response {
    TestCompleted(TestResult),
    TestInitialized(Tests),
}

#[derive(Serialize, Deserialize, Debug)]
pub struct TestResult {
    pub test: Tests,
    pub time: u64,
}

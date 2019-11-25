use super::ndarray_mul::NDArrayMul;
use super::ndarray_sum::NDArraySum;
use super::WASMTest;
use serde::{Deserialize, Serialize};

/// Tests factory - enum of available tests
///
/// Usage:
/// ```
/// use wabench::tests::Tests;
/// use wabench::WASMTest;
/// let test = Tests::NDArrayUnit.init();
/// println!("Created {}", Tests::NDArrayUnit.to_string());
/// ```
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Eq, Hash, Copy)]
pub enum Tests {
    NDArrayUnit,
    NDArraySum10M,
    NDArraySum30M,
    NDArrayMul3k,
    NDArrayMul6k,
}

impl Tests {
    const TESTS: [Tests; 4] = [
        Tests::NDArraySum10M,
        Tests::NDArraySum30M,
        Tests::NDArrayMul3k,
        Tests::NDArrayMul6k,
    ];

    /// Return list of available tests enum
    pub fn list() -> Vec<Self> {
        Self::TESTS.to_vec()
    }

    /// Initialize test and return its instance
    pub fn init(&self) -> Box<dyn WASMTest> {
        match self {
            Self::NDArrayUnit => Box::new(NDArraySum::new(10)),
            Self::NDArraySum10M => Box::new(NDArraySum::new(10_000_000)),
            Self::NDArraySum30M => Box::new(NDArraySum::new(30_000_000)),
            Self::NDArrayMul3k => Box::new(NDArrayMul::new(3_000)),
            Self::NDArrayMul6k => Box::new(NDArrayMul::new(6_000)),
        }
    }
}

impl ToString for Tests {
    fn to_string(&self) -> String {
        match self {
            Tests::NDArrayUnit => "NDArray test for unit tests".into(),
            Tests::NDArraySum10M => NDArraySum::description(10_000_000),
            Tests::NDArraySum30M => NDArraySum::description(30_000_000),
            Tests::NDArrayMul3k => NDArrayMul::description(3_000),
            Tests::NDArrayMul6k => NDArrayMul::description(6_000),
        }
    }
}

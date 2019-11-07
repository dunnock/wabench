use serde::{Serialize, Deserialize};
use super::ndarray_test::NDArrayTest;
use super::WASMTest;

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
  NDArray10M,
  NDArray20M,
  NDArray30M,
}

impl Tests {
  const TESTS: [Tests; 2] = [Tests::NDArray10M, Tests::NDArray30M];

  /// Return list of available tests enum
  pub fn list() -> Vec<Self> {
    Self::TESTS.to_vec()
  }

  /// Initialize test and return its instance
  pub fn init(&self) -> impl WASMTest {
    match self {
      Self::NDArrayUnit => NDArrayTest::new(10),
      Self::NDArray10M => NDArrayTest::new(10_000_000),
      Self::NDArray20M => NDArrayTest::new(20_000_000),
      Self::NDArray30M => NDArrayTest::new(30_000_000)
    }
  }
}

impl ToString for Tests {
  fn to_string(&self) -> String {
      match self {
        Tests::NDArrayUnit => "NDArray test for unit tests".into(),
        Tests::NDArray10M => NDArrayTest::description(10_000_000),
        Tests::NDArray20M => NDArrayTest::description(20_000_000),
        Tests::NDArray30M => NDArrayTest::description(30_000_000),
     }
   }
}

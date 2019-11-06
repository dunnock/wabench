use serde::{Serialize, Deserialize};
use super::ndarray_test::NDArrayTest;
use super::WASMTest;

/// Tests factory with typechecked list of available tests
/// 
/// Usage:
/// let test = Tests::NDArray.init();
/// println!("Completed test {} with avg time: {}", test.to_string(), test.benchmark(100));
/// 
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Eq, Hash, Copy)]
pub enum Tests {
  NDArray,
}

impl Tests {
  const TESTS: [Tests; 1] = [Tests::NDArray];

  /// Return list of available tests enum
  pub fn list() -> Vec<Self> {
    Self::TESTS.to_vec()
  }

  /// Initialize test and return its instance
  pub fn init(&self) -> impl WASMTest {
    match self {
      Self::NDArray => {
        NDArrayTest::init()
      }
    }
  }
}

impl ToString for Tests {
  fn to_string(&self) -> String {
      match self {
        Tests::NDArray => NDArrayTest::NAME.to_string(),
     }
   }
}

use serde::{Serialize, Deserialize};
use super::ndarray_test::NDArrayTest;
use super::WASMTest;


#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
pub enum Tests {
  NDArray,
}

impl Tests {
  const TESTS: [Tests; 1] = [Tests::NDArray];
  pub fn list() -> Vec<Self> {
    Self::TESTS.to_vec()
  }
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
        Tests::NDArray => "ndarray sum".to_string(),
     }
   }
}

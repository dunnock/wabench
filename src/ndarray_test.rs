use ndarray::{Array, Array1};
use ndarray_rand::RandomExt;
use ndarray_rand::rand_distr::Uniform;
use crate::wasmtest::WASMTest;

const SIZE: usize = 10_000_000;

pub struct NDArrayTest {
  a: Array1<f64>,
  b: Array1<f64>,
}

impl WASMTest<f64> for NDArrayTest {
  fn init() -> NDArrayTest {
    NDArrayTest {
      a: Array::random(SIZE, Uniform::new(0.0, 1.0)),
      b: Array::random(SIZE, Uniform::new(0.0, 1.0)),
    }
  }
  fn run(&self) -> f64 {
    (&self.a + &self.b).sum()
  }
}

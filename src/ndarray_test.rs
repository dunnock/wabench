use ndarray::Array1;
use ndarray_rand::RandomExt;
use ndarray_rand::rand_distr::Uniform;
use super::WASMTest;

const SIZE: usize = 10_000_000;

pub struct NDArrayTest {
  a: Array1<f64>,
  b: Array1<f64>,
}

impl WASMTest for NDArrayTest {
  fn init() -> NDArrayTest {
    NDArrayTest {
      a: Array1::random(SIZE, Uniform::new(0.0, 1.0)),
      b: Array1::random(SIZE, Uniform::new(0.0, 1.0)),
    }
  }
  fn run(&self) -> String {
    (&self.a + &self.b).sum().to_string()
  }
}

use ndarray::Array1;
use ndarray_rand::RandomExt;
use ndarray_rand::rand_distr::Uniform;
use super::WASMTest;

pub struct NDArraySum {
  a: Array1<f32>,
  b: Array1<f32>,
}

impl WASMTest for NDArraySum {
  fn run(&self) {
    (&self.a + &self.b).sum();
  }
}

impl NDArraySum {
  pub fn new(size: usize) -> Self {
    Self {
      a: Array1::random(size, Uniform::new(0.0, 1.0)),
      b: Array1::random(size, Uniform::new(0.0, 1.0)),
    }
  }

  pub fn description(size: usize) -> String { 
    format!(
r#"a: [{}, [0.0, 1.0)]
b: [{}, [0.0, 1.0)]
test = || (&a + &b).sum()"#, size, size)
  }
}


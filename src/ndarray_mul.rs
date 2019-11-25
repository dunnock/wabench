use super::WASMTest;
use ndarray::{Array1, Array2};
use ndarray_rand::rand_distr::Uniform;
use ndarray_rand::RandomExt;

pub struct NDArrayMul {
    a: Array1<f32>,
    b: Array2<f32>,
}

impl WASMTest for NDArrayMul {
    fn run(&self) {
        self.a.dot(&self.b).sum();
    }
}

impl NDArrayMul {
    pub fn new(size: usize) -> Self {
        Self {
            a: Array1::random(size, Uniform::new(0.0, 1.0)),
            b: Array2::random((size, size), Uniform::new(0.0, 1.0)),
        }
    }

    pub fn description(size: usize) -> String {
        format!(
            r#"a: [({}), [0.0, 1.0)]
b: [({},{}), [0.0, 1.0)]
test = || (&a * &b).sum()"#,
            size, size, size
        )
    }
}

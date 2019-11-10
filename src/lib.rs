pub mod ndarray_sum;
pub mod ndarray_mul;
pub mod tests;

#[cfg(not(target_os="unknown"))]
use std::time::Instant;
#[cfg(target_os="unknown")]
use instant::{Instant};

const RUNS: u128 = 100;

/// Trait for tests
/// 
/// Usage:
/// ```
/// use wabench::ndarray_test::NDArrayTest;
/// use wabench::WASMTest;
/// let test = NDArrayTest::new(10);
/// println!("Average test took {} ns", test.benchmark());
/// ```
pub trait WASMTest {
  /// Run test once
  fn run(self: &Self);

  /// Will run test $RUN times and return average execution time in nanoseconds
  fn benchmark(self: &Self) -> u128 {
    let now = Instant::now();
    for _i in 1..RUNS {
        self.run()
    };
    now.elapsed().as_nanos() / RUNS
  }
}

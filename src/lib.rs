pub mod ndarray_test;
pub mod tests;

use std::time::{Instant};

/// Trait for tests
/// 
/// Usage:
/// test.init(); // will initialize test data
/// println!("Average test took {} ns", test.benchmark());
pub trait WASMTest {
  const RUNS: u128 = 100;

  /// Initialize test data
  fn init() -> Self;

  /// Run test once
  fn run(self: &Self);

  /// Will run test $RUN times and return average execution time in nanoseconds
  fn benchmark(self: &Self) -> u128 {
    let now = Instant::now();
    for _i in 1..Self::RUNS {
        self.run()
    };
    now.elapsed().as_nanos() / Self::RUNS
  }
}

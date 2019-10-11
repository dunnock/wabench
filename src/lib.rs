pub mod ndarray_test;
pub mod tests;

pub trait WASMTest {
  fn init() -> Self;
  fn run(self: &Self) -> String;
}


pub trait WASMTest<R: std::fmt::Debug> {
  fn init() -> Self;
  fn run(self: &Self) -> R;
}

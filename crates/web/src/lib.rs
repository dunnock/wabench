#![recursion_limit="512"]

pub mod app;
pub mod runner;
mod location;
pub mod runners;
pub mod data;

pub use location::{Location, WasiWorker, StdwebWorker, EmbeddedWorker};
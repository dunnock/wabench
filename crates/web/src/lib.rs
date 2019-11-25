#![recursion_limit = "512"]

pub mod app;
pub mod data;
mod location;
pub mod runner;
pub mod runners;

pub use location::{EmbeddedWorker, Location, StdwebWorker, WasiWorker};

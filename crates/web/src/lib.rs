#![recursion_limit="512"]

pub mod app;
pub mod runner;
mod location;
pub mod data;
pub mod runners;

pub use location::{Location, WasiWorker, StdwebWorker, EmbeddedWorker};
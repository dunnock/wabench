#![recursion_limit="512"]

pub mod app;
pub mod runner;
mod location;
pub mod data;
pub mod runners;
pub mod data_views;

pub use location::{Location, WasiWorker, StdwebWorker, EmbeddedWorker};
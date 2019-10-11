use wabench::ndarray_test::NDArrayTest;
use wabench::WASMTest;
use std::time::{Instant};

const RUNS: u128 = 100; //because we need to divide milliseconds later

fn main() {
    let t1 = NDArrayTest::init();
    // let b = Array::random(100_000_000, Uniform::new(0, 100));
    let now = Instant::now();
    for _i in 1..RUNS {
        println!("{:?}", t1.run());
    }
    let duration = now.elapsed();
    println!("Average per loop {}", duration.as_millis()/(RUNS as u128) );
}
use wabench::tests::Tests;
use wabench::WASMTest;

fn main() {
    for test in Tests::list() {
        let name = test.to_string();
        println!("Starting {}", name);
        let instance = test.init();
        println!("{}: Initialized data", name);
        println!("{}: Average per loop {}ms", name, (instance.benchmark() / 1_000_000) as f64 );
    }
}
use wabench::tests::Tests;

fn main() {
    for test in Tests::list() {
        let name = test.to_string();
        println!("Starting\n{}", name);
        let instance = test.init();
        println!("Initialized data..");
        println!(
            "Average per loop {}ms",
            (instance.benchmark() / 1_000_000) as f64
        );
    }
}

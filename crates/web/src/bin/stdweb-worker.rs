use yew::agent::Threaded;
use wabench_web::{runner::TestRunner, StdwebWorker};

fn main() {
    web_logger::init();
    yew::initialize();
    TestRunner::<StdwebWorker>::register();
    yew::run_loop();
}
use wabench_web::{runner::TestRunner, StdwebWorker};
use yew::agent::Threaded;

fn main() {
    web_logger::init();
    yew::initialize();
    TestRunner::<StdwebWorker>::register();
    yew::run_loop();
}

use yew::agent::Threaded;
use wabench_web::runner;

fn main() {
    web_logger::init();
    yew::initialize();
    runner::TestRunner::<runner::StdwebWorker>::register();
    yew::run_loop();
}
use wabench_web::wasi_agent::ThreadedWASI;

fn main() {
    web_logger::init();
    yew::initialize();
    wabench_web::runner::TestRunner::register();
    yew::run_loop();
}
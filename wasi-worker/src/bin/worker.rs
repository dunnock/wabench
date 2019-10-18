use wabench_web::wasi_agent::ThreadedWASI;

fn main() {
    //web_logger::init();
    //yew::initialize();
    if let Err(err) = wabench_web::runner::TestRunner::run() {
        println!("Failed to register agent {}", err);
    };
    //yew::run_loop();
}
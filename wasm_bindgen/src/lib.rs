#![recursion_limit="256"]
use wabench_web::app;
use wabench_web::runner;
mod utils;

use wasm_bindgen::prelude::*;


// This is the entry point for the web app
#[wasm_bindgen]
pub fn run_app() -> Result<(), JsValue> {
    utils::set_panic_hook();
    web_logger::init();
    yew::start_app::<app::App>();
    Ok(())
}
use wabench_web::wasi_agent::{ThreadedWASI, AgentScope};
use wabench_web::runner::TestRunner;
use std::thread_local;
use std::cell::RefCell;
use std::borrow::{Borrow, BorrowMut};
use std::io::{self, Read};

thread_local! {
    static AGENT_SCOPE: RefCell<Option<AgentScope<TestRunner>>> = RefCell::new(None);
}

fn main() {
    match wabench_web::runner::TestRunner::run() {
        Ok(scope) => {AGENT_SCOPE.with(|local| local.replace(Some(scope)));},
        Err(err) => {println!("Failed to register agent {}", err);}
    }
}

#[no_mangle]
pub extern "C" fn message_ready() -> usize {
    let mut buf: [u8; 1000] = [0; 1000];
    let message_size = io::stdin().read(&mut buf);
    if let Ok(len) = &message_size {
        let message = buf[0..*len].to_vec();
        AGENT_SCOPE.with(|local| {
            if let Some(scope) = &*local.borrow() {
                wabench_web::runner::TestRunner::handler(&scope, message)
            }
        });
        return *len;
    } else {
        eprintln!("Worker error> {:?}", message_size);
        return 0;
    }
}

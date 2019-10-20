use ::wasi::wasi_unstable as wasi;

fn main() {
    debug_std_thread_sleep();
    std::thread::sleep(std::time::Duration::new(0,5));
}

fn debug_std_thread_sleep() {
    // Copied from thread::sleep
    const CLOCK_ID: wasi::Userdata = 0x0123_45678;

    let clock = wasi::raw::__wasi_subscription_u_clock_t {
        identifier: CLOCK_ID,
        clock_id: wasi::CLOCK_MONOTONIC,
        timeout: 5u64,
        precision: 0,
        flags: 0,
    };
    let in_ = [wasi::Subscription {
        userdata: 0, //Should be CLOCK_ID
        type_: wasi::EVENTTYPE_CLOCK,
        u: wasi::raw::__wasi_subscription_u { clock: clock },
    }];
    let (res, event) = unsafe {
        let mut out: [wasi::Event; 1] = std::mem::zeroed();
        let res = wasi::poll_oneoff(&in_, &mut out);
        (res, out[0])
    };

    println!("Res = {:?}", res);
    assert_eq!(event.userdata, CLOCK_ID, "event.userdata");
    assert_eq!(event.error, 0, "event.error");
    assert_eq!(event.type_, wasi::EVENTTYPE_CLOCK, "event.type_");
}
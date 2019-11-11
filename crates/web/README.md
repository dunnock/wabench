This is wabench web application which executes tests in 3 environemnts:

 - wasi - src/bin/worker.rs
 - stdweb - src/bin/stdweb-worker.rs
 - main web app - src/bin/main.rs

# How to build and run locally

Easiest way to build WASI worker with [wasi-worker-cli](https://crates.io/crates/wasi-worker-cli)
```
cargo install --force wasi-worker-cli
```

Easiest way to build web app and stdweb worker with [cargo-web](https://crates.io/crates/cargo-web)
```
cargo install --force cargo-web
```

## Build workers and start

```
wasiworker deploy
cargo web build --bin stdweb-worker --release --target wasm32-unknown-unknown
cargo web start --release
```

# Application code structure

 - src/app.rs is the main web page
 - src/data/* contains messages structure, tests execution DB and its view representation
 - src/runner.rs is the yew agent which executes tests
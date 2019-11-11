# Yet another WASM benchmark (including WASI)

## Goal

WASM benchmark running on user devices. Compare data from range of web devices, browsers, comparing WASM execution in different environments.

## Problem statements

There are many WebAssembly performance results published, though most of those performed on a limited set of devices and/or browsers. Secondary, many benchmarks actually include data initialization time and time taken by context outside of actual benchmarked code. In this project we will focus on measuring pure WebAssembly code execution timings, not including context and data initialization.

## Running locally

Project's workspace structure:

 - tests sources and implementations located under `./src`
 - main native runner is `./src/main.rs`
 - web runner and browser app [./crates/web](https://github.com/dunnock/wabench/tree/master/crates/web)

## Trial and error notes

Unoptimized dev build for all targets seems working 10+ times slower, so I focused on release timings.

Building for wasm32-wasi target appeared to be fastest way to go, allowed to run benchmarks from console via `wasmer` and `wavm` and browser using `@wasmer/wasi`. Those benchmarks displayed timings sometimes better than running optimized release build (probably due to memory reallocation in native version). 

Using wasm-pack via webpack to compile web application appeared to be the most complicated setup, code resides under `examples/wasm_bindgen` directory. Also I did not manage to setup service worker, since yew workers are natively built with cargo web, hence tests are blocking web page with this setup. Timing appeared 2 times slower than of WASI. This approach seems gives most control of JavaScript application setup.

Using stdweb stack to compile web application appeared to be the quite simple, with `Public` worker in separate thread as well as `Context` initial run time appeared to be 2 times slower than wasm32-wasi, same as wasm-bindgen.

Setting up WASI service worker appered to be the most challenging, primarily from the point of providing communication of binary data between worker and web page: 
 - polling API is not quite ready yet, thread:sleep is not implemented on some VMs and does not actually return control to JS engine, file polling is not implemented in JS at the moment. Hence implementing event loop is not feasible
 - I did not figure out how to pass arrays as function parameters
  Most feasible option appeared to be establishing communication via filesystem (thanks to @wasmer/wasmFm and @wasmer/terminal for beautiful idea)

Safari and wasmer/wasi polyfill does not play well together.

## Plan

- [X] Local tests execution
- [X] Compile and run as WASI
- [X] Huge ndarray sum test
- [ ] Fibonacci
- [X] Webapp in subdir web
- [X] Add WASI worker setup for yew to speed up
- [X] Fix bug of running second test: BufferedStdin read on position not supported: 21
- [ ] Setup build.rs: split crates for stdweb and wasi workers, app, deployment/styles
- [ ] Fix Safari Instant clock value issue
- [ ] Embed let's encrypt for wabench container
- [ ] Publish results somewhere...?

## Acknowledgements

- cranestation and wasmtime - leading standard and implementation, wasmtime wider wasm support
- wasmer.io - easy to use and quite fast wasm runtime
- wavm - it seems fastest wasm runtime
- yew - elegant web framework, it was easy to build web app (except wasm-pack setup part)

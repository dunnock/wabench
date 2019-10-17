# Yet another WASM benchmark (WASI focused)

## Goal

Web3 performance benchmark for WASM. WASM benchmarks performed on user agents, all the statistic is open and shared for comparison. 

## Problem statements

There are many WebAssembly performance results published, though most of those performed on a limited set of devices owned by benchmark author, while web is truly heterogeneous, varying not only by hardware, browser, OS and versions, but also various random factors.

Another problem is that many benchmarks actually WASM integration performance tests including whole WASM context and data initialization time. In this project we will focus on measuring pure WebAssembly code execution timings, not including context and data initialization.

## Trial and error notes

Unoptimized dev build for all targets I've tried working 10+ times slower, so I focused on release timings.

Building for wasm32-wasi target appeared to be fastest way to go, allowed to run benchmarks from console via `wasmer` and `wavm` and browser using `wasmer`. Those benchmarks displayed timings sometimes better than running optimized release build (probably due to memory reallocation in native version). 

Using wasm-pack via webpack to compile web application appeared to be the most complicated setup, code resides under `wasm_bindgen` directory. Also I did not manage to setup service worker, since yew workers are natively built with cargo web, hence tests are blocking web page with this setup. Timing appeared 2 times slower than of WASI. This approach seems gives most control of JavaScript application setup.

Using stdweb stack to compile web application appeared to be the quite simple, with `Public` worker in separate thread as well as `Context` initial run time appeared to be 2 times slower than wasm32-wasi, same as wasm-bindgen.

## Plan

- [X] Local tests execution
- [X] Compile and run as WASI
- [X] Huge ndarray sum test
- [ ] Fibonacci
- [X] Webapp in subdir web
- [ ] Add WASI worker setup for yew to speed up


## Acknowledgements

- wasmer.io - it seems most powerful, interconnected and fast wasm runtime
- wavm - it seems fastest wasm runtime
- yew - elegant web framework, it was easy to build web app (except wasm-pack setup part)


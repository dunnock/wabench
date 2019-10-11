# Goal

Web3 performance benchmark for WASM. WASM benchmarks performed on user agents, all the statistic is open and shared for comparison. 

# Problem statement

There are many WebAssembly performance results published on medium or github repositories, though most of those performed on a limited set of devices owned by benchmark author, while web is truly heterogeneous, varying not only by hardware, browser, OS and versions, but also various random factors.

Another problem is that many benchmarks actually include whole WASM context and data initialization time and should be considered WASM integration performance tests. In this project we will focus on measuring pure WebAssembly code execution timings. Of course WASM context timings are also important and might be good exercise for the future.

# Wabench

# Plan

[X] Local tests execution
[X] Compile and run as WASI
[X] Huge ndarray sum test
[ ] Fibonacci
[ ] Webapp in subdir web



# Acknowledgements

- wasmer.io
- wavm

# Other benchmarks

 - 
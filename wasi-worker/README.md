Yew-worker compiled into WASI, loaded and executed by `@wasmer/wasi`.

# To run 
```
cargo build --bin worker --release --target wasm32-wasi
npm install
npm run build
cargo web start
```
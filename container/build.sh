rm -rf dist
cp -r ../target/deploy dist
cp ../target/wasm32-unknown-unknown/release/stdweb* dist/stdweb/
cp ../crates/web/dist/* dist/wasi/
docker build . -t wabench 
docker tag wabench dunnock/wabench
docker push dunnock/wabench
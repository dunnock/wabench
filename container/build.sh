echo "cleanup..."
rm -rf dist
cd ../crates/web
echo "runnning builds..."
wasiworker deploy
cargo web build --bin stdweb-worker --release --target wasm32-unknown-unknown
cargo web deploy --release
cd ../../container
echo "copying bundles..."
cp -r ../target/deploy dist
cp ../target/wasm32-unknown-unknown/release/stdweb* dist/stdweb/
cp ../crates/web/dist/* dist/wasi/
echo "building and publishing container..."
docker build . -t wabench 
docker tag wabench dunnock/wabench
docker push dunnock/wabench
#!/bin/sh -x
cd ../crates/web
echo "runnning build..."
wasiworker deploy
cd ../../container
echo "copying bundles..."
cp ../crates/web/dist/* dist/wasi/
echo "rebuilding container..."
docker build . -t wabench

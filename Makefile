site: preinstall wasi stdweb main
	echo "Build complete"

preinstall:
	echo "Preinstall"
	curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
	~/.cargo/bin/rustup target add wasm32-unknown-unknown
	-mkdir dist
	-~/.cargo/bin/cargo install wasi-worker-cli
	-~/.cargo/bin/cargo install cargo-web

wasi:
	echo "Wasi worker"
	cd crates/web; RUST_BACKTRACE=1 ~/.cargo/bin/wasiworker deploy
	-mkdir dist/wasi
	cp crates/web/dist/* dist/wasi

stdweb:
	echo "Stdweb worker"
	-mkdir dist/stdweb
	~/.cargo/bin/cargo web build --bin stdweb-worker --release --target wasm32-unknown-unknown --package wabench-web
	cp target/wasm32-unknown-unknown/release/stdweb* dist/stdweb/

main:
	echo "Main website"
	~/.cargo/bin/cargo web deploy --release --package wabench-web
	cp target/deploy/main.* dist
	cp target/deploy/index.* dist
	cp target/deploy/style.* dist

clean:
	rm -rf dist
	rm -rf crates/web/dist/*
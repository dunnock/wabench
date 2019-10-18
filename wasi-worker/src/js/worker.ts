import { IFs } from "memfs";
import WASI from "../../../../wasmer-js/packages/wasi";
import WasmFs from "../../../../wasmer-js/packages/wasmfs";
import wasmTransformerInit, {lowerI64Imports} from "@wasmer/wasm-transformer";

declare var self: Worker;

const wasmTransformerUrl = "wasm_transformer_bg.wasm";
const workerUrl = "worker.wasm";

let iamWorker = self;

// Instantiate a new WASI Instance
const wasmFs = new WasmFs();

let incomingFd = wasmFs.fs.openSync("/output.bin", "w+");
let outgoingFd = wasmFs.fs.openSync("/input.bin", "w+");

let wasi = new WASI({
  preopenDirectories: {
    "/": "/"
  },
  args: [],
  env: {},
  bindings: {
    ...WASI.defaultBindings,
    fs: wasmFs.fs
  }
});

const fetchAndTransformWasmBinary = async (url: string) => {
  // Get the original Wasm binary
  const fetchedOriginalWasmBinary = await fetch(url);
  const originalWasmBinaryBuffer = await fetchedOriginalWasmBinary.arrayBuffer();
  const originalWasmBinary = new Uint8Array(originalWasmBinaryBuffer);

  // Initialize our wasm-transformer
  await wasmTransformerInit(wasmTransformerUrl); 
  // IMPORTANT: This URL points to wherever the wasm-transformer.wasm is hosted

  // Transform the binary, by running the lower_i64_imports from the wasm-transformer
  const transformedBinary = lowerI64Imports(originalWasmBinary);

  // Compile the transformed binary
  const transformedWasmModule = await WebAssembly.compile(transformedBinary);
  return transformedWasmModule;
};

const startWasiTask = async (file: string) => {
  try {
    // Fetch our Wasm File
    const module = await fetchAndTransformWasmBinary(file);
    console.log("Module transformed and compiled, starting...");

    console.log("Setting up filesystem");
    setupFileSystemHandlers(wasmFs.fs);

    // Instantiate the WebAssembly file
    let instance = await WebAssembly.instantiate(module, {
      wasi_unstable: wasi.wasiImport
    });

    // Start the WebAssembly WASI instance!
    wasi.start(instance);

  } catch (e) {
    console.error(e);
    console.error(e.stack);
  }
};

function setupFileSystemHandlers(fs: IFs) {
  // Output what's inside of /dev/stdout!
  fs.createReadStream("/dev/stdout")
    .on('data', (chunk) => {
      console.log(`Worker> ${chunk}`);
    });
  fs.createReadStream("/dev/stderr")
    .on('data', (chunk) => {
      console.error(`Worker Error> ${chunk}`);
    });
  fs.createReadStream("", {fd: incomingFd})
    .on('data', (chunk) => {
      console.log(`Worker Outgoing Data> ${chunk}`);
      if(typeof iamWorker.postMessage === 'function')
        iamWorker.postMessage(Array.from(chunk));
    });
}

iamWorker.onmessage = function(event) {
  console.log(`Worker Incoming Data> ${event.data}`);
  wasmFs.fs.writeFileSync(outgoingFd, event.data);
};

startWasiTask(workerUrl);
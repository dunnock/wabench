import { IFs } from "memfs";
import WASI from "../../../../wasmer-js/packages/wasi";
import WasmFs from "../../../../wasmer-js/packages/wasmfs";
import wasmTransformerInit, {lowerI64Imports} from "@wasmer/wasm-transformer";
import { BufferedStdin } from './stdin';

declare var self: Worker;

const wasmTransformerUrl = "wasm_transformer_bg.wasm";
const workerUrl = "worker.wasm"; //"wabench_app_wasi.wasm"; //

let iamWorker = self;
let instance: any = null;

// Instantiate a new WASI Instance
const wasmFs = new WasmFs();

let outgoingFd = wasmFs.fs.openSync("/output.bin", "w+");
let incomingFd = wasmFs.fs.openSync("/dev/stdin", "r"); //.openSync("/input.bin", "w+");

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
let stdin = new BufferedStdin();


const fetchAndTransformWasmBinary = async (url: string) => {
  // Get the original Wasm binary
  const fetchedOriginalWasmBinary = await fetch(url);
  const originalWasmBinaryBuffer = await fetchedOriginalWasmBinary.arrayBuffer();
  const originalWasmBinary = new Uint8Array(originalWasmBinaryBuffer);

  // Initialize our wasm-transformer
  await wasmTransformerInit(wasmTransformerUrl); 
  // IMPORTANT: This URL points to wherever the wasm-transformer.wasm is hosted

  // Transform the binary, by running the lower_i64_imports from the wasm-transformer
  const transformedBinary =  lowerI64Imports(originalWasmBinary);

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
    instance = await WebAssembly.instantiate(module, {
      wasi_unstable: wasi.wasiImport
    });

    // Start the WebAssembly WASI instance!
    wasi.start(instance);

    //stdin.push(Uint8Array.from([1,2,3,4,5,6]));
    //console.log(instance.exports.same(124));

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
  fs.createReadStream("", {fd: outgoingFd})
    .on('data', (chunk) => {
      console.log(`Worker Outgoing Data> ${chunk}`);
      if(typeof iamWorker.postMessage === 'function')
        iamWorker.postMessage(Array.from(chunk));
    });
  stdin.bindToFd(wasmFs.volume.fds[0]);
}

iamWorker.onmessage = function(event) {
  console.log(event.data);
  console.log(`Worker Incoming Data> ${event.data}`);
  stdin.push(event.data);
  console.log(instance.exports.message_ready());
};

startWasiTask(workerUrl);
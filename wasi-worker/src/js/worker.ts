import WASI from "../../../../wasmer-js/packages/wasi/dist/packages/wasi/lib";
import WasmFs from "../../../../wasmer-js/packages/wasmfs/dist/packages/wasmfs/lib";
import wasmTransformerInit, {lowerI64Imports} from "@wasmer/wasm-transformer";

const wasmTransformerUrl = "wasm_transformer_bg.wasm";
const workerUrl = "worker.wasm";

// Instantiate a new WASI Instance
const wasmFs = new WasmFs();
let wasi = new WASI({
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

    // Instantiate the WebAssembly file
    let instance = await WebAssembly.instantiate(module, {
      wasi_unstable: wasi.wasiImport
    });

    // Start the WebAssembly WASI instance!
    wasi.start(instance);

    // Output what's inside of /dev/stdout!
    const stdout = await wasmFs.getStdOut();
    console.log(stdout);

  } catch (e) {
    console.error(e);
    console.error(e.stack);
  }
};

startWasiTask(workerUrl);
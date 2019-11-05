// Rollup Config for Web Workers

import resolve from "rollup-plugin-node-resolve";
//import commonjs from "rollup-plugin-commonjs";
//import builtins from "rollup-plugin-node-builtins";
//import globals from "rollup-plugin-node-globals";
import json from "rollup-plugin-json";
import typescript from "rollup-plugin-typescript2";
import compiler from "@ampproject/rollup-plugin-closure-compiler";
import bundleSize from "rollup-plugin-bundle-size";
import copy from 'rollup-plugin-copy';

const sourcemapOption = process.env.PROD ? undefined : "inline";

let typescriptPluginOptions = {
  tsconfig: "./tsconfig.json",
  exclude: ["./test/**/*"],
  clean: process.env.PROD ? true : false,
  objectHashIgnoreUnknownHack: true
};

const plugins = [
  resolve({
    preferBuiltins: true
  }),
  copy({ //TODO: copy all required packages into destination folder
    targets: [
//      { src: 'node_modules/@wasmer/wasm-transformer/wasm_transformer_bg.wasm', dest: 'static/wasi' },
      { src: `target/wasm32-wasi/${process.env.PROD ? "release" : "debug"}/worker.wasm`, dest: 'static/wasi' },
    ]
  }),
  // just for debugging of @wasmer/wasi
  typescript(typescriptPluginOptions),
  json(),
  //process.env.PROD ? compiler() : undefined,
  //process.env.PROD ? bundleSize() : undefined
];

const workerBundles = [
  {
    input: "./src/js/worker.ts",
    output: [
      {
        file: "static/wasi/worker.js",
        format: "iife",
        sourcemap: sourcemapOption,
        name: "Process"
      }
    ],
    watch: {
      clearScreen: false
    },
    plugins: plugins
  }
];

export default workerBundles;
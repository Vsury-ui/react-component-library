import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import peerDeps from "rollup-plugin-peer-deps-external";
//import postcss from "rollup-plugin-postcss";
import { dts } from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts", // entry point of your library
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      }, // generate commonjs bundle
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      }, // generate ecma script module bundle
    ],
    plugins: [
      peerDeps(), // handle peer dependencies in your library
      resolve(), // resolve node_modules
      //postcss(), // handle css related stuff
      commonjs(), // convert commonjs to esm
      typescript(), // handle typescript related stuff
      terser(), // handle the minification of the library
    ],
    external: ["react"],
  },
  {
    input: "src/index.ts", // entry point of your library for types
    output: [{ file: "dist/index.d.ts", format: "es" }], // generate types
    plugins: [dts()], // handle typescript related stuff
    //external: [/\.css$/], // exclude css files from types
  },
];
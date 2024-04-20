import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/main.js",
  output: {
    file: "plugins/sample-plugin/tiddlers/clock.js",
    format: "cjs",
  },
  plugins: [
    nodeResolve({
      browser: true,
      preferBuiltins: false,
    }),
  ],
};

import { nodeResolve } from "@rollup/plugin-node-resolve";
import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss'

export default {
  input: "src/main.jsx",
  output: {
    file: "plugins/sample-plugin/tiddlers/clock.js",
    format: "cjs",
  },
  plugins: [
    nodeResolve({
      browser: true,
      preferBuiltins: false,
    }),
    postcss({
      plugins: []
    }),
    // commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: [['@babel/preset-react', { "runtime": "automatic" }]],
      extensions: ['.js', '.jsx']
    }),
    alias({
      entries: [
        { find: 'react', replacement: 'preact/compat' },
        { find: 'react-dom/test-utils', replacement: 'preact/test-utils' },
        { find: 'react-dom', replacement: 'preact/compat' },
        { find: 'react/jsx-runtime', replacement: 'preact/jsx-runtime' }
      ]
    })
  ],
};

import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    format: 'es',
    file: 'dist/main.js'
  },
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      jsnext: true
    })
  ]
};

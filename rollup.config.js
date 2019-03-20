const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');

const extensions = ['.js', '.ts'];

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    resolve({
      jsnext: true,
      extensions,
    }),
    commonjs(),
    babel({
      extensions,
      exclude: 'node_modules/**',
      presets: [
        ['@babel/typescript'],
        [
          '@babel/preset-env',
          {
            modules: false,
            useBuiltIns: 'usage'
          }
        ]
      ],
      plugins: [
        '@babel/proposal-class-properties',
        '@babel/proposal-object-rest-spread'
      ]
    })
  ]
};

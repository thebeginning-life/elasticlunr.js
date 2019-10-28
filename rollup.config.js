import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import {terser} from "rollup-plugin-terser";
const babelConfig = require('./babel.config.js');
export default {
 input: 'lib/elasticlunr.js',
 output: [
  {
   file: pkg.main,
   format: 'cjs'
  },
/*  {
   file: pkg.module,
   format: 'es'
  } */
 ],
 external: [
 ],
 plugins: [
     
    resolve(),
     
    babel(babelConfig),
    // terser()
 ]
};
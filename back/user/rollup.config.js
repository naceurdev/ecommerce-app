import { map, mapValues } from 'lodash';

const packages = require('./package.json');

const { dependencies } = packages;

const external = map(dependencies, (mod, key) => key);
const globals = mapValues(dependencies, (mod, key) => key);

export default {
  input: 'src/index.js',
  output: {
    name: 'Users',
    file: 'dist/bundle.js',
    format: 'umd',
    sourceMap: process.env.SOURCE_MAP,
    globals: Object.assign({}, globals, { path: 'path' }),
  },
  external: external.concat('path'),
};

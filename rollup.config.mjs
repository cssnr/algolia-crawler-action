import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'

// noinspection JSUnusedGlobalSymbols
export default {
    input: 'src/index.js',
    output: {
        esModule: true,
        file: 'dist/index.js',
        format: 'esm',
    },
    plugins: [commonjs(), json(), nodeResolve({ preferBuiltins: true })],
}

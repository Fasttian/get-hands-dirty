'use strict';

const path = require('path')
module.exports = {
    entry: {
        index: './src/index.js',
        other: './src/other.js',
    },
    output: {
        path:  path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'production'
}
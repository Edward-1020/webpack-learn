const path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
    },
    module: {
        rules: [
            { test: /\.js$/, use: { loader: 'babel-loader', query: { presets: ['@babel/preset-env'] } } },
        ]
    },
};
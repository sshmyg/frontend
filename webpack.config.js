'use strict';

const path = require('path');
const webpack = require('webpack');

let jsCWD = path.join(__dirname, './js');
let isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    context: jsCWD,
    cache: true,
    devtool: isDev ? 'cheap-inline-module-sourcemap' : 'hidden',

    watchOptions: {
        aggregateTimeout: 100
    },

    entry: {
        'common': './app'
    },

    output: {
        path: path.join(__dirname, 'build/'),
        filename: '[name].js',
        publicPath: '/build/',
    },

    resolve: {
        modules: [path.join(jsCWD), 'node_modules'],
        extensions: ['.js', '.jsx'],
    },

    stats: {
        warnings: false
    },

    module: {
        rules: [
            //Babel settings
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    },

    devServer: {
        contentBase: __dirname,
        historyApiFallback: true,
        open: true
    }
};

if (!isDev) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}

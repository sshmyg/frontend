'use strict';

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const jsCwd = path.join(process.cwd(), './src');
const isDev = process.env.NODE_ENV !== 'production';
const bundleName = 'bundle.js';

module.exports = {
    context: jsCwd,
    cache: isDev,
    devtool: isDev ? 'cheap-inline-module-sourcemap' : 'hidden',
    entry: './index.js',
    mode: isDev ? 'development' : 'production',

    watchOptions: {
        aggregateTimeout: 100,
        poll: true
    },

    output: {
        path: path.join(process.cwd(), 'dest'),
        filename: bundleName,
        publicPath: '/dest/',
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
        alias: {
            'app': path.join(jsCwd)
        }
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
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: isDev
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: isDev
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],

    devServer: {
        contentBase: __dirname,
        historyApiFallback: true,
        open: true,
        hot: true,
        compress: true,
        inline: true,
        stats: {
            modules: false,
            hash: false
        },
        watchOptions: {
            ignored: /node_modules/
        }
    }
};

if (isDev) {
    module.exports.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

/* if (!isDev) {
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
} */
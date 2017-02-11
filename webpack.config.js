'use strict';

let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let autoprefixer = require('autoprefixer');

let jsCWD = path.join(__dirname, './src');
let isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    context: jsCWD,
    cache: true,
    devtool: isDev ? 'cheap-inline-module-sourcemap' : 'hidden',

    watchOptions: {
        aggregateTimeout: 100
    },

    entry: {
        'common': './entries/common'
    },

    output: {
        path: path.join(__dirname, 'build/js'),
        filename: '[name].js'
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
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDev
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                outputStyle: isDev ? 'expanded' : 'compressed'
                            }
                        }
                    ]
                })
            }
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: [
                    autoprefixer({
                        browsers: ['last 5 versions', 'ie 9']
                    })
                ]
            }
        }),
        new ExtractTextPlugin({
            filename: '../css/[name].css',
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ],

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
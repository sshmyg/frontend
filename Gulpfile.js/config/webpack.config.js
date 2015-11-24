var path        = require('path'),
    configGlob  = require('./index'),
    entriesHash = require('../helpers/entriesHash'),
    isDev       = configGlob.isDev,
    baseJsPath  = path.join(process.cwd(), 'app', 'js');

module.exports = {
    context: baseJsPath,

    entry: entriesHash,

    devtool: isDev ? 'cheap-inline-module-sourcemap' : 'hidden',

    output: {
        path: 'app/build/js',
        filename: '[name].min.js'
    },

    resolve: {
        root: path.join(baseJsPath, 'modules'),
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html',
                exclude: ['node_modules']
            }
            /*{
                test: /\.js$/,
                include: baseJsPath,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2']
                }
            }*/
        ]
    }
};
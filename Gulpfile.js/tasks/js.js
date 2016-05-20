'use strict';

var gulp = require('gulp');
var path = require('path');
var webpack = require('webpack');
var gulpUtil = require('gulp-util');
var browserSync = require('browser-sync');

var jsContext  = path.join(process.cwd(), 'app/js');

var webpackConf = {
    context: jsContext,

    entry: {
        'common.react': './entries/common.react'
    },

    devtool: isDev ? 'cheap-inline-module-sourcemap' : 'hidden',

    output: {
        path: 'build/js',
        filename: '[name].min.js'
    },

    resolve: {
        root: path.join(jsContext),
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            //Load html files
            /*{
                test: /\.html$/,
                loader: 'html',
                exclude: ['node_modules']
            },*/

            //Babel settings
            {
                test: /\.js$/,
                include: jsContext,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0'/*, 'stage-1', 'stage-2'*/]
                    //plugins: ['transform-decorators-legacy']
                }
            }
        ]
    },

    plugins: [
        
    ]
};

//Minify js
!isDev && webpackConf.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));

gulp.task('js', function(callback) {
    return webpack(webpackConf, function(err, stats) {
        if (err) throw new gulpUtil.PluginError('webpack', err);

        callback();
    })
    .watch({
        aggregateTimeout: 100
    }, function(err, stats) {
        if (err) throw new gulpUtil.PluginError('webpack', err);

        gulpUtil.log('[webpack]', stats.toString());

        browserSync.reload();
    });
});
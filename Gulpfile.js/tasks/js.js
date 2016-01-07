'use strict';

var gulp = require('gulp'),
    path = require('path'),
    webpack = require('webpack'),
    gulpUtil = require('gulp-util'),
    browserSync = require('browser-sync'),
    
    jsContext  = path.join(process.cwd(), 'app', 'js'),
    webpackConf = {
        context: jsContext,

        entry: {
            common: './entries/common',
            vendors: './entries/vendors'
        },

        devtool: isDev ? 'cheap-inline-module-sourcemap' : 'hidden',

        output: {
            path: 'app/build/js',
            filename: '[name].min.js'
        },

        resolve: {
            root: path.join(jsContext, 'modules'),
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
                    include: jsContext,
                    loader: 'babel',
                    query: {
                        presets: ['es2015', 'stage-2']
                    }
                }*/
            ]
        },

        plugins: [
            
        ]
    };

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
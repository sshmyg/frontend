var gulp             = require('gulp'),
    webpack          = require('webpack'),
    gulpUtil         = require('gulp-util'),
    browserSync      = require('browser-sync'),

    handleTaskConfig = require('../helpers/taskConfigHandler'),
    getFilesList     = require('../helpers/getFilesList'),


    webpackConf      = require('../config/webpack.config'),
    isDev            = require('../config').isDev;

module.exports = function(config) {
    config = handleTaskConfig('js', config);

    gulp.task(config.taskName, function(callback) {
        return webpack(webpackConf, function(err, stats) {
                    if (err) throw new gulpUtil.PluginError("webpack", err);

                    callback();
                })
                .watch({
                    aggregateTimeout: 100
                }, function(err, stats) {
                    if (err) throw new gulpUtil.PluginError("webpack", err);

                    gulpUtil.log("[webpack]", stats.toString());

                    browserSync.reload();
                });
    });

    return config;
};
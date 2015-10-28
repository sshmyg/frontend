'use strict';

var gulpUtil     = require('gulp-util'),
    prettyHrtime = require('pretty-hrtime'),
    startTime;

module.exports = {
    start: function(filepath) {
        startTime = process.hrtime();
        gulpUtil.log('Bundling', gulpUtil.colors.green(filepath) + '...');
    },

    watch: function(bundleName) {
        gulpUtil.log('Watching files required by', gulpUtil.colors.yellow(bundleName));
    },

    end: function(filepath) {
        var taskTime = process.hrtime(startTime),
            prettyTime = prettyHrtime(taskTime);

        gulpUtil.log('Bundled', gulpUtil.colors.green(filepath), 'in', gulpUtil.colors.magenta(prettyTime));
    }
};
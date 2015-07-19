'use strict';

var gulp = require('gulp'),
    path = require('path'),
    runSequence = require('run-sequence'),

    loadTask = function (taskName) {
        if (!taskName) {
            return false;
        }

        var taskPath = path.resolve(gulp.cfg.gulpPath, 'tasks', taskName) + '.js';

        return require(taskPath).apply(null, Array.prototype.slice.call(arguments, 1));
    },
    browserSync;

    gulp.cfg = {
        isDev: true,
        gulpPath: './gulp',
        get loc() {
            var locationPath = path.resolve(this.gulpPath, 'location.js');
            return require(locationPath);
        } 
    };



browserSync = loadTask('server', gulp);
loadTask('json', gulp);
loadTask('jade', gulp);
loadTask('css', gulp);
loadTask('js', gulp, browserSync);
loadTask('watch', gulp, browserSync);


gulp.task('default', function(callback) {
    runSequence('json', 'jade', 'css', 'js', 'server', 'watch', callback);
});









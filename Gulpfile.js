'use strict';

var gulp = require('gulp'),
    path = require('path'),
    runSequence = require('run-sequence').use(gulp),
    gulpPath = './gulp',
    loc = require(path.resolve(gulpPath, 'location.js')),

    loadTask = function (taskName) {
        if (!taskName) {
            return false;
        }

        var taskPath = path.resolve(gulpPath, 'tasks', taskName) + '.js';

        return require(taskPath).apply(null, Array.prototype.slice.call(arguments, 0));
    },
    browserSync;


browserSync = loadTask('server', gulp, loc);
loadTask('json', gulp, loc);
loadTask('jade', gulp, loc);
loadTask('css', gulp, loc);
loadTask('js', gulp, loc, browserSync);
loadTask('watch', gulp, loc, browserSync);
loadTask('clear', gulp, loc);


gulp.task('build', function() {
    runSequence('json', 'jade', 'css', 'js');
});

gulp.task('default', function() {
    runSequence('json', 'jade', 'css', 'js', 'server', 'watch');
});









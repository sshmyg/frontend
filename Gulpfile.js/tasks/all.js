var gulp        = require('gulp'),
    runSequence = require('run-sequence').use(gulp),
    path        = require('path'),
    configGlob  = require('../config'),
    serverMode  = configGlob.isDev ? 'dev' : 'build';

module.exports = function() {
    gulp.task('build', function() {
        runSequence('json', 'jade', 'css', 'js');
    });

    gulp.task('dev', function() {
        runSequence('json', 'jade', 'css', 'js', 'server', 'watch');
    });

    gulp.task('default', function() {
        runSequence(serverMode);
    });
};
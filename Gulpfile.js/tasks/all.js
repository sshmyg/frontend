'use strict';

var gulp = require('gulp'),
    path = require('path'),
    runSequence = require('run-sequence').use(gulp),
    
    serverMode = isDev ? 'dev' : 'build';

gulp.task('build', function() {
    runSequence('json', 'jade', 'css', 'js');
});

gulp.task('dev', function() {
    runSequence('json', 'jade', 'css', 'js', 'server', 'watch');
});

gulp.task('default', function() {
    runSequence(serverMode);
});
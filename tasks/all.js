var gulp = require('gulp'),
    runSequence = require('run-sequence').use(gulp),
    config = require('../config.json'),
    serverMode = config.isDev ? 'dev' : 'build';

gulp.task('build', function() {
    runSequence('json', 'jade', 'css', 'js');
});

gulp.task('dev', function() {
    runSequence('json', 'jade', 'css', 'js', 'server', 'watch');
});

gulp.task('default', function() {
    runSequence(serverMode);
});
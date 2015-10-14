var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence').use(gulp);

gulp.task('watch', function() {
    gulp.watch('app/jade/**/*.jade', function() {
        global.useJadeCache = true;
        runSequence('jade', browserSync.reload);
    });
    
    gulp.watch('app/css/**/*.scss', function() {
        runSequence('css', browserSync.reload);
    });

    gulp.watch(['../config.json', 'app/json/**/*.json'], function() {
        global.useJadeCache = false;
        runSequence('json', 'jade', 'css', browserSync.reload);
    });
});
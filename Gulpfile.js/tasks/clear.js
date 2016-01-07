'use strict';

var gulp = require('gulp'),
    gulpRimraf = require('gulp-rimraf');

gulp.task('clear', function() {
    return gulp.src([
                'app/build',
                './node_modules',
                'npm-debug.log'
            ], {read: false})
            .pipe(gulpRimraf({
                force: true
            }));
});
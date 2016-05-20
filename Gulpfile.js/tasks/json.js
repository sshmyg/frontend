'use strict';

var gulp = require('gulp'),
    path = require('path'),
    jade = require('gulp-jade'),
    gulpExtend = require('gulp-extend');

gulp.task('json', function() {
    return gulp.src('app/json/**/*.json')
            .pipe(gulpExtend('common.json'))
            .pipe(gulp.dest('build/json'));
});
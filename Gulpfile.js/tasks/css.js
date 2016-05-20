'use strict';

var gulp = require('gulp'),
    path = require('path'),
    gulpIf = require('gulp-if'),
    gulpSass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),

    handleErrors = require('../helpers').handleErrors,

    sassConfig = {
        outputStyle: 'compressed'
    },

    autoprefixerConfig = {
        browsers: ['last 5 versions', 'ie 9']
    };

gulp.task('css', function() {
    return gulp.src('app/css/**/*.{sass,scss}')
            .pipe(gulpIf(isDev, sourcemaps.init()))
            .pipe(gulpSass(sassConfig))
            .on('error', handleErrors)
            .pipe(autoprefixer(autoprefixerConfig))
            .pipe(gulpIf(isDev, sourcemaps.write()))
            .pipe(gulp.dest('build/css'));
});
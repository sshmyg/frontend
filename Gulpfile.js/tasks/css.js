'use strict';

var gulp = require('gulp'),
    path = require('path'),
    gulpIf = require('gulp-if'),
    gulpSass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    neat = require('node-neat').includePaths,
    autoprefixer = require('gulp-autoprefixer'),

    handleErrors = require('../helpers').handleErrors,

    sassConfig = {
        outputStyle: 'compressed',
        includePaths: ['styles'].concat(neat)
    },

    autoprefixerConfig = {
        browsers: ['last 3 version']
    };

gulp.task('css', function() {
    return gulp.src('app/css/**/*.scss')
            .pipe(gulpIf(isDev, sourcemaps.init()))
            .pipe(gulpSass(sassConfig))
            .on('error', handleErrors)
            .pipe(autoprefixer(autoprefixerConfig))
            .pipe(gulpIf(isDev, sourcemaps.write()))
            .pipe(gulp.dest('app/build/css'));
});
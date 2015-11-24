var gulp             = require('gulp'),
    gulpIf           = require('gulp-if'),
    gulpSass         = require('gulp-sass'),
    sourcemaps       = require('gulp-sourcemaps'),
    autoprefixer     = require('gulp-autoprefixer'),
    neat             = require('node-neat').includePaths,
    path             = require('path'),
    handleTaskConfig = require('../helpers/taskConfigHandler'),
    handleErrors     = require('../helpers/errorsHandler'),
    configGlob       = require('../config'),
    isDev            = configGlob.isDev;

module.exports = function(config) {
    config = handleTaskConfig('css', config);

    config.sass && (config.sass.includePaths = ['styles'].concat(neat));

    gulp.task(config.taskName, function() {
        return gulp.src(config.src)
                .pipe(gulpIf(isDev, sourcemaps.init()))
                .pipe(gulpSass(config.sass))
                .on('error', handleErrors)
                .pipe(autoprefixer(config.autoprefixer))
                .pipe(gulpIf(isDev, sourcemaps.write()))
                .pipe(gulp.dest(config.dest));
    });

    return config;
};
'use strict';

var fs = require('fs'),
    gulp = require('gulp'),
    jade = require('gulp-jade'),
    gulpIf = require('gulp-if'),
    cached = require('gulp-cached'),
    changed = require('gulp-changed'),
    gulpFilter = require('gulp-filter'),
    jadeInherit = require('gulp-jade-inheritance');
    
gulp.task('jade', function() {
    var jadeData;

    try {
        jadeData = JSON.parse(fs.readFileSync('app/build/json/common.json').toString());
    } catch(e) {
        jadeData = require('app/build/json/common.json');
    }

    return gulp.src('app/jade/**/*.jade')
            .pipe(changed('app/build/markup', {
                extension: '.html'
            }))
            .pipe(gulpIf(global.useJadeCache, cached('jade')))
            .pipe(jadeInherit({
                basedir: 'app/jade'
            }))
            .pipe(gulpFilter(function (file) {
                //Ignore folders and files with lodash name begin (_file-name.jade)
                return !/\/_/.test(file.path) && !/^_/.test(file.relative);
            }))
            .pipe(jade({
                locals: jadeData,
                pretty: '\t'
            }))
            .pipe(gulp.dest('app/build/markup'));
});


module.exports = function(taskName, gulp, loc) {
    'use strict';
    
    var jade = require('gulp-jade'),
        jadeInherit = require('gulp-jade-inheritance'),
        changed = require('gulp-changed'),
        cached = require('gulp-cached'),
        gulpIf = require('gulp-if'),
        gulpFilter = require('gulp-filter'),
        fs = require('fs');

    return gulp.task(taskName, function() {
        var jadeData;

        try {
            jadeData = JSON.parse(fs.readFileSync(loc.jsonResultFilePath).toString());
        } catch(e) {
            jadeData = require(loc.jsonResultFilePath);
        }

        return gulp.src(loc.jadeAllFiles)
                .pipe(changed(loc.markup, {
                    extension: '.html'
                }))
                .pipe(gulpIf(global.useJadeCache, cached('jade')))
                .pipe(jadeInherit({
                    basedir: loc.jade
                }))
                .pipe(gulpFilter(function (file) {
                    return !/\/_/.test(file.path) && !/^_/.test(file.relative);
                }))
                .pipe(jade({
                    locals: jadeData,
                    pretty: '\t'
                }))
                .pipe(gulp.dest(loc.markup));
    });
};
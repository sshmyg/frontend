var gulp = require('gulp'),
    jade = require('gulp-jade'),
    jadeInherit = require('gulp-jade-inheritance'),
    changed = require('gulp-changed'),
    cached = require('gulp-cached'),
    gulpIf = require('gulp-if'),
    gulpFilter = require('gulp-filter'),
    fs = require('fs');

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
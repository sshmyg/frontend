var gulp = require('gulp'),
    jade = require('gulp-jade'),
    gulpExtend = require('gulp-extend');

gulp.task('json', function() {
    return gulp.src(['../config.json', 'app/json/**/*.json'])
            .pipe(gulpExtend('common.json'))
            .pipe(gulp.dest('app/build/json'));
});
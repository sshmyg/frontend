module.exports = function(gulp) {
    'use strict';

    var gulpRimraf = require('gulp-rimraf');

    return gulp.task('clear', function() {
        return gulp.src([
                    'app/build',
                    './node_modules'
                ], {
                    read: false
                })
                .pipe(gulpRimraf({
                    force: true
                }));
    });
};
module.exports = function(taskName, gulp, loc) {
    'use strict';

    var gulpRimraf = require('gulp-rimraf');

    return gulp.task(taskName, function() {
        return gulp.src([
                    loc.build,
                    process.cwd() + '/node_modules'
                ], {
                    read: false
                })
                .pipe(gulpRimraf({
                    force: true
                }));
    });
};
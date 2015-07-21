module.exports = function(taskName, gulp, loc) {
    'use strict';
    
    var jade = require('gulp-jade'),
        gulpExtend = require('gulp-extend');

    return gulp.task(taskName, function() {
                return gulp.src([loc.config, loc.jsonFiles])
                        .pipe(gulpExtend(loc.jsonResultFileName))
                        .pipe(gulp.dest(loc.jsonResultPath));
            });
};
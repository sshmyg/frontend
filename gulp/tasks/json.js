module.exports = function(gulp) {
    var jade = require('gulp-jade'),
        gulpExtend = require('gulp-extend'),
        loc = gulp.cfg.loc;

    return gulp.task('json', function() {
                return gulp.src(loc.jsonFiles)
                        .pipe(gulpExtend(loc.jsonResultFileName))
                        .pipe(gulp.dest(loc.jsonResultPath));
            });
};
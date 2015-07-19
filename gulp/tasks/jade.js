module.exports = function(gulp) {
    var jade = require('gulp-jade'),
        jadeInherit = require('gulp-jade-inheritance'),
        changed = require('gulp-changed'),
        cached = require('gulp-cached'),
        gulpif = require('gulp-if'),
        filter = require('gulp-filter'),
        loc = gulp.cfg.loc;

    return gulp.task('jade', function() {
                return gulp.src(loc.jadeAllFiles)
                        .pipe(changed(loc.markup, {
                            extension: '.html'
                        }))
                        .pipe(gulpif(global.isWatching, cached('jade')))
                        .pipe(jadeInherit({
                            basedir: loc.jade
                        }))
                        .pipe(filter(function (file) {
                            return !/\/_/.test(file.path) && !/^_/.test(file.relative);
                        }))
                        .pipe(jade({
                            locals: require(loc.jsonResultFilePath),
                            pretty: '\t'
                        }))
                        .pipe(gulp.dest(loc.markup));
            });
};
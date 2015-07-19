module.exports = function(gulp, browserSync) {
    gulp.task('setWatch', function() {
        global.isWatching = true;
    });

    gulp.task('watch', ['setWatch'], function() {
        gulp.watch(gulp.cfg.loc.jadeAllFiles, ['jade', browserSync.reload]);
    });
};
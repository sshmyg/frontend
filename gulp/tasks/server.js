module.exports = function(gulp) {
    var browserSync = require('browser-sync'),
        loc = gulp.cfg.loc;

    gulp.task('server', function() {
        browserSync({
            notify: false,
            server: {
                directory: false,
                baseDir: loc.markup,
                index: 'index.html'
            }
        });
    });

    return browserSync;
};
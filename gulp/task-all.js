module.exports = function(gulp) {
    'use strict';

    var runSequence = require('run-sequence').use(gulp),
        config = require(process.cwd() + '/config.json');

    gulp.task('build', function() {
        runSequence('json', 'jade', 'css', 'js');
    });

    gulp.task('dev', function() {
        runSequence('json', 'jade', 'css', 'js', 'server', 'watch');
    });

    gulp.task('default', function() {
        if (config.isDev) {
            runSequence('dev');
        } else {
            runSequence('build');
        }
    });

    return true;
};
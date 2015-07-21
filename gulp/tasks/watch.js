module.exports = function(taskName, gulp, loc, browserSync) {
    'use strict';
    
    var runSequence = require('run-sequence').use(gulp);

    gulp.task(taskName, function() {
        gulp.watch(loc.jadeAllFiles, function() {
            global.useJadeCache = true;
            runSequence('jade', browserSync.reload);
        });
        
        gulp.watch(loc.cssFiles, function() {
            runSequence('css', browserSync.reload);
        });

        gulp.watch([loc.config, loc.jsonFiles], function() {
            global.useJadeCache = false;
            runSequence('json', 'jade', 'css', browserSync.reload);
        });
    });
};
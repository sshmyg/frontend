module.exports = function(taskName, gulp, loc) {
    'use strict';
    
    var browserSync = require('browser-sync');

    gulp.task(taskName, function() {
        browserSync({
            notify: false,
            //open: false,
            ui: false,
            server: {
                directory: false,
                baseDir: loc.markup,
                index: 'index.html',
                routes: {
                    '/css/': loc.cssBuild + '/',
                    '/js/': loc.jsBuild + '/'
                }
            }
        });
    });

    return browserSync;
};
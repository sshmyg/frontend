module.exports = function(gulp) {
    'use strict';
    
    var browserSync = require('browser-sync');

    gulp.task('server', function() {
        browserSync({
            notify: false,
            //open: false,
            ui: false,
            server: {
                directory: false,
                baseDir: 'app/build/markup',
                index: 'index.html',
                routes: {
                    '/css/': 'app/build/css/',
                    '/js/': 'app/build/js/',
                }
            }
        });
    });

    return browserSync;
};
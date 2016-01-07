'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('server', function() {
    return browserSync({
        notify: false,
        ui: false,
        open: true,
        server: {
            directory: false,
            baseDir: 'app/build/markup',
            index: 'index.html',
            routes: {
                '/css/': 'app/build/css/',
                '/js/': 'app/build/js/'
            }
        }
    });
});
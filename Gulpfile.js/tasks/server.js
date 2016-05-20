'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    historyApiFallback = require('connect-history-api-fallback');

gulp.task('server', function() {
    return browserSync({
        notify: false,
        ui: false,
        open: false,
        server: {
            directory: false,
            baseDir: 'build/markup',
            index: 'index.html',
            routes: {
                '/css/': 'build/css/',
                '/js/': 'build/js/'
            },
            middleware: [historyApiFallback()]
        }
    });
});
var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    runSequence  = require('run-sequence').use(gulp),
    path         = require('path'),
    pathToConfig = '../config',
    configGlob   = require(pathToConfig);

module.exports = function() {
    gulp.task('watch', function() {
        gulp.watch(configGlob.tasks.jade.src, function() {
            global.useJadeCache = true;
            runSequence('jade', browserSync.reload);
        });
        
        gulp.watch(configGlob.tasks.css.src, function() {
            runSequence('css', browserSync.reload);
        });

        gulp.watch([pathToConfig, configGlob.tasks.json.src], function() {
            global.useJadeCache = false;
            runSequence('json', 'jade', 'css', browserSync.reload);
        });
    });
};
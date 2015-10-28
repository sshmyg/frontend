var gulp             = require('gulp'),
    browserSync      = require('browser-sync'),
    handleTaskConfig = require('../helpers/taskConfigHandler');

module.exports = function(config) {
    config = handleTaskConfig('server', config);

    gulp.task(config.taskName, function() {
        browserSync(config.browserSync);
    });

    return config;
};
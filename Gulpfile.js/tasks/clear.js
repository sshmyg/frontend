var gulp             = require('gulp'),
    gulpRimraf       = require('gulp-rimraf'),
    handleTaskConfig = require('../helpers/taskConfigHandler');

module.exports = function(config) {
    config = handleTaskConfig('clear', config);

    gulp.task(config.taskName, function() {
        return gulp.src(config.src, {
                    read: false
                })
                .pipe(gulpRimraf({
                    force: true
                }));
    });

    return config;
};
var gulp             = require('gulp'),
    jade             = require('gulp-jade'),
    gulpExtend       = require('gulp-extend'),
    path             = require('path'),

    pathToConfig     = path.join(process.cwd(), 'config.json'),
    handleTaskConfig = require('../helpers/taskConfigHandler');

module.exports = function(config) {
    config = handleTaskConfig('json', config);

    gulp.task(config.taskName, function() {
        return gulp.src([pathToConfig, config.src])
                .pipe(gulpExtend(config.extendFile))
                .pipe(gulp.dest(config.dest));
    });

    return config;
};
var gulp             = require('gulp'),
    gulpCompass      = require('gulp-compass'),
    path             = require('path'),
    handleTaskConfig = require('../helpers/taskConfigHandler'),
    handleErrors     = require('../helpers/errorsHandler'),
    configGlob       = require(path.join(process.cwd(), 'config.json'));

module.exports = function(config) {
    config = handleTaskConfig('css', config);
    config.sass && (config.sass.sourcemap = configGlob.isDev);

    gulp.task(config.taskName, function() {
        return gulp.src(config.src)
                .pipe(gulpCompass(config.sass))
                .on('error', handleErrors)
                .pipe(gulp.dest(config.dest));
    });

    return config;
};
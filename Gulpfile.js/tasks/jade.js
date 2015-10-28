'use strict';

var gulp             = require('gulp'),
    jade             = require('gulp-jade'),
    jadeInherit      = require('gulp-jade-inheritance'),
    changed          = require('gulp-changed'),
    cached           = require('gulp-cached'),
    gulpIf           = require('gulp-if'),
    gulpFilter       = require('gulp-filter'),
    fs               = require('fs'),

    handleTaskConfig = require('../helpers/taskConfigHandler');

/**
 * Create jade task
 * @param {Object} config
 * @param {String} config Config could be a string, and this string === param name in config.task object
 * @param {String} [config.taskName] Name for task, jade by default
 * @param {String} config.baseDir Base dir for jade file location
 * @param {String} config.src What jade files we shoild convert (Ignore lodash begin file and folders)
 * @param {String} config.dest Folder for builded files
 * @param {String} config.jsondest Path to json config file (for jade)
 * @param {String} config.pretty Pretiffy params
 * @param {String} config.extension Extension for builded files
 */
module.exports = function(config) {
    config = handleTaskConfig('jade', config);

    gulp.task(config.taskName, function() {
        var jadeData;

        try {
            jadeData = JSON.parse(fs.readFileSync(config.jsonDest).toString());
        } catch(e) {
            jadeData = require(config.jsonDest);
        }

        return gulp.src(config.src)
                .pipe(changed(config.dest, {
                    extension: config.extension
                }))
                .pipe(gulpIf(global.useJadeCache, cached('jade')))
                .pipe(jadeInherit({
                    basedir: config.baseDir
                }))
                .pipe(gulpFilter(function (file) {
                    //Ignore folders and files with lodash name begin (_file-name.jade)
                    return !/\/_/.test(file.path) && !/^_/.test(file.relative);
                }))
                .pipe(jade({
                    locals: jadeData,
                    pretty: config.pretty
                }))
                .pipe(gulp.dest(config.dest));
    });

    return config;
};


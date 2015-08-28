'use strict';

var gulpUtil = require('gulp-util'),
    prettyHrtime = require('pretty-hrtime'),
    _ = require('lodash'),
    getFilesList = require('recursive-readdir-sync'),
    path = require('path'),
    startTime;

module.exports = {
    bundleLogger: {
        start: function(filepath) {
            startTime = process.hrtime();
            gulpUtil.log('Bundling', gulpUtil.colors.green(filepath) + '...');
        },

        watch: function(bundleName) {
            gulpUtil.log('Watching files required by', gulpUtil.colors.yellow(bundleName));
        },

        end: function(filepath) {
            var taskTime = process.hrtime(startTime),
                prettyTime = prettyHrtime(taskTime);

            gulpUtil.log('Bundled', gulpUtil.colors.green(filepath), 'in', gulpUtil.colors.magenta(prettyTime));
        }
    },

    handleErrors: function() {
        var args = Array.prototype.slice.call(arguments);

        gulpUtil.log(gulpUtil.colors.red(args[0].toString()));

        this.emit && this.emit('end');
    },

    /**
     * Description
     * @param {Object} conf
     * @param {Object} conf.defaultConf
     * @param {Object} conf.exactConf
     * @param {String} conf.entriesPath
     */
    createBrowserifyConfig: function(conf) {
        conf = conf || {};

        var cwd = process.cwd(),
            browserifyConf = {},
            files, fileName, filePrefix;


        if (!(conf.defaultConf || conf.entriesPath)) {
            return false;
        }

        conf.exactConf || (conf.exactConf = {});

        try {
            files = getFilesList(conf.entriesPath);
        } catch (err) {
            if (err.errno === 34) {
                gulpUtil.log(gulpUtil.colors.red('Path does not exist'));
            } else {
                throw err;
            }
        }

        browserifyConf.bundleConfigs = files.map(function(filePath, i) {
            fileName = path.basename(filePath);
            filePrefix = fileName.replace('.js', '');
            
            return _.extend({}, conf.defaultConf, {
                entries: path.join(filePath),
                outputName: filePrefix + '.min.js'
            }, conf.exactConf[filePrefix] || {})
        });

        return browserifyConf;
    }
};
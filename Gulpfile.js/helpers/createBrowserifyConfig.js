'use strict';

var getFilesList = require('recursive-readdir-sync'),
    gulpUtil     = require('gulp-util'),
    path         = require('path'),
    _            = require('lodash');

 /**
 * Create config for boriwserify
 * @param {Object} conf
 * @param {Object} conf.defaultConf Common browserify config 
 * @param {Object} conf.entryConf Configs for entries 
 * @param {Object} conf.entryConf.XXX (XXX) - mean file name in entries folder. Personal config
 * @param {String} conf.entriesPath Path to folder with entries files
 */
module.exports = function(conf) {
    conf = conf || {};

    var cwd = process.cwd(),
        browserifyConf = {},
        files, fileName, filePrefix;


    if (!(conf.defaultConf || conf.entriesPath)) {
        return false;
    }

    conf.entryConf || (conf.entryConf = {});

    try {
        files = getFilesList(conf.entriesPath);
    } catch (err) {
        if (err.errno === 34) {
            gulpUtil.log(gulpUtil.colors.red('Path does not exist'));
        } else {
            throw err;
        }
    }

    //Exclude hidden files
    files = files.filter(function(filePath) {
        return path.basename(filePath).indexOf('.') !== 0;
    });

    browserifyConf.bundleConfigs = files.map(function(filePath, i) {
        fileName = path.basename(filePath);
        filePrefix = fileName.replace('.js', '');
        
        return _.extend({}, conf.defaultConf, {
            entries: path.join(filePath),
            outputName: filePrefix + '.min.js'
        }, conf.entryConf[filePrefix] || {})
    });

    return browserifyConf;
};
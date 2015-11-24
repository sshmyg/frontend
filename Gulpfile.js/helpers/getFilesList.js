var getFilesList = require('recursive-readdir-sync'),
    gulpUtil     = require('gulp-util'),
    path         = require('path'),
    configGlob   = require('../config');

module.exports = function(folderPath) {
    var files;

    if (!folderPath) {
        gulpUtil.log(gulpUtil.colors.red('Path to folder does not exist.'));
        return false;
    }

    try {
        files = getFilesList(folderPath);
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

    return files;
};
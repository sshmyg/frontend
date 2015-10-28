'use strict';

var gulpUtil = require('gulp-util');

module.exports = function() {
    var args = _.toArray(arguments);

    gulpUtil.log(gulpUtil.colors.red(args[0].toString()));

    this.emit && this.emit('end');
};
var gulpUtil = require('gulp-util'),
    _ = require('lodash');

//Handle errors
module.exports.handleErrors = function() {
    var args = _.toArray(arguments);

    gulpUtil.log(gulpUtil.colors.red(args[0].toString()));

    this.emit && this.emit('end');
};
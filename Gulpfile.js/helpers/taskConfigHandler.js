'use strict';

var path       = require('path'),
    _          = require('lodash'),
    configGlob = require(path.join(process.cwd(), 'config.json'));

module.exports = function(defaultTaskName, config) {
    var isString;

    if (!defaultTaskName) {
        throw new Error('defaultTaskName required');
    }

    !config && (config = defaultTaskName);
    isString = _.isString(config);

    if (isString) {
        defaultTaskName = config;
        config = configGlob.tasks[config] || {};
    }

    config = _.merge({}, config);

    if (_.isEmpty(config)) {
        throw new Error('Config is empty');
    }

    !config.taskName && (config.taskName = defaultTaskName);

    return config;
};
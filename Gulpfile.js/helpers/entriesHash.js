var path         = require('path'),
    getFilesList = require('./getFilesList'),
    jsConf       = require('../config/tasks').js,

    entriesList  = getFilesList(jsConf.entriesPath),
    resultHash   = {},
    entryName;

    entriesList.forEach(function(entry) {
        entryName = path.basename(entry, '.js');
        resultHash[entryName] = './' + path.join('entries', entryName);
    });

module.exports = resultHash;



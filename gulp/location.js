'use strict';

var path = require('path');

module.exports = {
    minFileName: 'common',
    root: 'app',

    get config() {
        return process.cwd() + '/config.json';
    },

    //Build
    get build() {
        return path.join(this.root, 'build');
    },

    //Murkup
    get markup() {
        return path.join(this.build, 'markup');
    },

    //Jade
    get jade() {
        return path.join(this.root, 'jade');
    },
    get jadeAllFiles() {
        return path.join(this.jade, '**', '*.jade');
    },

    //JSON
    get jsonResultFileName() {
        return this.minFileName + '.json';
    },
    get jsonFiles() {
        return path.resolve(this.root, 'json', '**/*.json');
    },
    get jsonResultPath() {
        return path.resolve(this.build, 'json');
    },
    get jsonResultFilePath() {
        return path.resolve(this.build, 'json', this.jsonResultFileName);
    },

    //CSS
    get css() {
        return path.join(this.root, 'css');
    },
    get cssFiles() {
        return path.join(this.css, '**','*.scss');
    },
    get cssBuild() {
        return path.join(this.build, 'css');
    },
    get font() {
        return path.join(this.css, 'font');
    },

    //JS
    get jsResultFileName() {
        return this.minFileName + '.js';
    },
    get js() {
        return path.join(this.root, 'js');
    },
    get jsBuild() {
        return path.join(this.build, 'js');
    },
    get jsInit() {
        return './' + path.join(this.js, 'init.js');
    },

    //Images
    get images() {
        return path.join(this.root, 'images');
    },
};
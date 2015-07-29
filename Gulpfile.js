var gulp = require('gulp'),
    path = require('path'),
    browserSync;

//Load tasks
browserSync = require('./gulp/task-server')(gulp);
require('./gulp/task-json')(gulp);
require('./gulp/task-jade')(gulp);
require('./gulp/task-css')(gulp);
require('./gulp/task-js')(gulp, browserSync);
require('./gulp/task-watch')(gulp, browserSync);
require('./gulp/task-clear')(gulp);

//Set mixed tasks
require('./gulp/task-all')(gulp);











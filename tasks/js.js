var gulp = require('gulp'),
    browserify = require('browserify'),
    browserSync = require('browser-sync'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    mergeStream = require('merge-stream'),
    gulpUglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    through = require('through2'),

    _ = require('lodash'),
    gulpUtil = require('gulp-util'),
    prettyHrtime = require('pretty-hrtime'),
    getFilesList = require('recursive-readdir-sync'),
    path = require('path'),
    startTime,

    config = require('../config.json'),

    //Helpers
    bundleLogger = {
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

    handleErrors = function() {
        var args = _.toArray(arguments);

        gulpUtil.log(gulpUtil.colors.red(args[0].toString()));

        this.emit && this.emit('end');
    },

    /**
     * Create config for boriwserify
     * @param {Object} conf
     * @param {Object} conf.defaultConf Common browserify config 
     * @param {Object} conf.entryConf Configs for entries 
     * @param {Object} conf.entryConf.XXX (XXX) - mean file name in entries folder. Personal config
     * @param {String} conf.entriesPath Path to folder with entries files
     */
    createBrowserifyConfig = function(conf) {
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
    },

    BROWSERIFY_CONF = createBrowserifyConfig({
        defaultConf: {
            paths: ['app/js/modules'],
            dest: 'app/build/js',
            extensions: ['.html']
        },
        entryConf: {
            common: {
                debug: config.isDev
            }
        }, 
        entriesPath: config.jsEntriesPath
    });

gulp.task('js', function() {
    var bundleQueue = BROWSERIFY_CONF.bundleConfigs.length,
        browserifyThis = function(bundleConfig) {
            if(config.isDev) {
                // Add watchify args and debug (sourcemaps) option
                _.extend(bundleConfig, watchify.args);
                // A watchify require/external bug that prevents proper recompiling,
                // so (for now) we'll ignore these options during development. Running
                // `gulp browserify` directly will properly require and externalize.
                 bundleConfig = _.omit(bundleConfig, ['external', 'require']);
            }

            var b = browserify(bundleConfig),
                bundle = function() {
                    // Log when bundling starts
                    bundleLogger.start(bundleConfig.outputName);

                    return b
                        .bundle()

                        // Report compile errors
                        .on('error', handleErrors)

                        // Use vinyl-source-stream to make the
                        // stream gulp compatible. Specify the
                        // desired output filename here.
                        .pipe(source(bundleConfig.outputName))
                        .pipe(gulpIf(!config.isDev, gulpUglify()))

                        // Specify the output destination
                        .pipe(gulp.dest(bundleConfig.dest))
                        .pipe(gulpIf(config.isDev, browserSync.reload({stream: true})))
                        .pipe(through.obj(function(file, enc, cb) {
                            bundleLogger.end(bundleConfig.outputName);
                            cb();
                        }))
                };

            if(config.isDev) {
                // Wrap with watchify and rebundle on changes
                b = watchify(b);
                // Rebundle on update
                b.on('update', bundle);
                bundleLogger.watch(bundleConfig.outputName);
            } else {
                // Sort out shared dependencies.
                // b.require exposes modules externally
                if(bundleConfig.require) b.require(bundleConfig.require);
                // b.external excludes modules from the bundle, and expects
                // they'll be available externally
                if(bundleConfig.external) b.external(bundleConfig.external);
            }

            return bundle();
        };

  // Start bundling with Browserify for each bundleConfig specified
  return mergeStream.apply(gulp, _.map(BROWSERIFY_CONF.bundleConfigs, browserifyThis));
});
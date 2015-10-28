var gulp                   = require('gulp'),
    browserify             = require('browserify'),
    browserSync            = require('browser-sync'),
    watchify               = require('watchify'),
    source                 = require('vinyl-source-stream'),
    mergeStream            = require('merge-stream'),
    gulpUglify             = require('gulp-uglify'),
    gulpIf                 = require('gulp-if'),
    through                = require('through2'),
    gulpUtil               = require('gulp-util'),
    prettyHrtime           = require('pretty-hrtime'),
    _                      = require('lodash'),
    path                   = require('path'),

    handleTaskConfig       = require('../helpers/taskConfigHandler'),
    createBrowserifyConfig = require('../helpers/createBrowserifyConfig'),
    errorsHandle           = require('../helpers/errorsHandler'),
    logger                 = require('../helpers/logger'),

    configGlob             = require(path.join(process.cwd(), 'config.json')),
    isDev                  = configGlob.isDev;

module.exports = function(config) {
    config = handleTaskConfig('js', config);

    config.entryConf.common && (config.entryConf.common.debug = isDev);

    var BROWSERIFY_CONF = createBrowserifyConfig(config);

    gulp.task(config.taskName, function() {
        var bundleQueue = BROWSERIFY_CONF.bundleConfigs.length,
            browserifyThis = function(bundleConfig) {
                if(isDev) {
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
                        logger.start(bundleConfig.outputName);

                        return b
                            .bundle()
                            .on('error', errorsHandle)

                            // Use vinyl-source-stream to make the
                            // stream gulp compatible. Specify the
                            // desired output filename here.
                            .pipe(source(bundleConfig.outputName))
                            .pipe(gulpIf(!isDev, gulpUglify()))

                            // Specify the output destination
                            .pipe(gulp.dest(bundleConfig.dest))
                            .pipe(gulpIf(isDev, browserSync.reload({stream: true})))
                            .pipe(through.obj(function(file, enc, cb) {
                                logger.end(bundleConfig.outputName);
                                cb();
                            }))
                    };

                if(isDev) {
                    // Wrap with watchify and rebundle on changes
                    b = watchify(b);
                    // Rebundle on update
                    b.on('update', bundle);
                    logger.watch(bundleConfig.outputName);
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

    return config;
};
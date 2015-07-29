//https://github.com/greypants/gulp-starter

module.exports = function(gulp, browserSync) {
    'use strict';
    
    var browserify = require('browserify'),
        watchify = require('watchify'),
        source = require('vinyl-source-stream'),
        mergeStream = require('merge-stream'),
        gulpUtil = require('gulp-util'),
        prettyHrtime = require('pretty-hrtime'),
        gulpNotify = require('gulp-notify'),
        gulpUglify = require('gulp-uglify'),
        gulpSourcemaps = require('gulp-sourcemaps'),
        buffer = require('vinyl-buffer'),
        gulpIf = require('gulp-if'),
        _ = require('lodash'),

        config = require(process.cwd() + '/config.json'),

        startTime,
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
            var args = Array.prototype.slice.call(arguments);

            gulpNotify.onError({
                title: 'Compile Error',
                message: "<%= error %>"
            }).apply(this, args);

            this.emit('end');
        },

        DEFAULT_BUNDLE_CONF = {
            paths: 'app/js/modules',
            dest: 'app/build/js',
            extensions: ['.html']
        },

        BROWSERIFY_CONF = {
            bundleConfigs: [

                //Lib bundle
                _.extend({}, DEFAULT_BUNDLE_CONF, {
                    entries: 'app/js/libs.js',
                    outputName: 'common.libs.js'
                    //insertGlobals: true
                }),

                //All modules bundle
                _.extend({}, DEFAULT_BUNDLE_CONF, {
                    debug: true,
                    entries: 'app/js/init.js',
                    outputName: 'common.js',
                })
            ]
        };
    
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
                            .pipe(buffer())
                            .pipe(gulpIf(config.isDev, gulpSourcemaps.init({loadMaps: true})))
                            .pipe(gulpUglify())
                            //writes .map file
                            .pipe(gulpIf(config.isDev, gulpSourcemaps.write('./')))
                            // Specify the output destination
                            .pipe(gulp.dest(bundleConfig.dest))
                            .pipe(gulpIf(config.isDev, browserSync.reload({stream: true})));
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
};
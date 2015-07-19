var gulp		= require('gulp'),
	less		= require('gulp-less-sourcemap'),
	clear		= require('gulp-rimraf'),
	jade		= require('gulp-jade'),
	browserify	= require('browserify'),
	watchify	= require('watchify'),
	source		= require('vinyl-source-stream'),
	rename		= require('gulp-rename'),
	browserSync = require('browser-sync'),
	jadeInherit = require('gulp-jade-inheritance'),
	extend		= require('gulp-extend'),
	ignore		= require('gulp-ignore'),
	loc = {
		root		: 'app',
		build		: 'build',

		markup		: 'app/markup',
		markupCss	: 'app/markup/css',
		markupJs	: 'app/markup/js',

		jade		: 'app/jade',
		jadeData	: './app/jade/files/data',
		jadeDataRes	: 'result.json',

		js			: 'app/js',

		css			: 'app/css',

		images		: 'app/images',

		/* JS */
		jsInit		: './app/js/init.js',
		jsMin		: 'main.min.js',

		/* CSS */
		allCssMinName	: 'all.min',
		sourceMapURL	: 'all.min.css.map',
		lessAll			: 'app/css/all.less'
	},
	BROWSERIFY_CONF = {
		debug : true,
		extensions : ['.html'],
		bundleConfigs : [
			{
				entries		: loc.jsInit,
				dest		: loc.markupJs,
				outputName	: loc.jsMin
			}
		]
	},
	SERVER_CONF = {
		notify		: false,
		directory	: true,
		server : {
			baseDir : [loc.markup],
		},
		files : [
			loc.root + '/**',
			'!' + loc.root + '/**.map',
			'!' + loc.jade + '/**.jade'
		]
	},
	JADE_FILES = loc.jade + '/*.jade';


gulp.task('setWatch', function() {
	global.isWatching = true;
});

//https://github.com/greypants/gulp-starter
gulp.task('js', function(callback) {
	var bundleQueue = BROWSERIFY_CONF.bundleConfigs.length,
		applyBrowserify = function(conf) {
			var bundler = browserify({
					cache		: {},
					packageCache: {},
					fullPaths	: true,
					entries		: conf.entries,
					extensions	: BROWSERIFY_CONF.extensions,
					debug		: BROWSERIFY_CONF.debug
				}),
				handleErrors = function() {
					console.log('BUNDLE ERROR!!!!!!');
				},
				reportFinished = function() {
					//console.log(conf.outputName)

					if(bundleQueue) {
						bundleQueue--;

						// If queue is empty, tell gulp the task is complete.
						// https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
						if(bundleQueue === 0) callback();
					}
				},
				bundle = function() {
					//console.log(conf.outputName);

					return bundler
							.bundle()
							.on('error', handleErrors)
							.pipe(source(conf.outputName))
							.pipe(gulp.dest(conf.dest))
							.on('end', reportFinished);
				};

			if (global.isWatching) {
				bundler = watchify(bundler);
				bundler.on('update', bundle);
			}

			return bundle();
		};

	BROWSERIFY_CONF.bundleConfigs.forEach(applyBrowserify);
});

gulp.task('less', function () {
	return gulp
			.src(loc.lessAll)
			.pipe(rename({
				basename	: loc.allCssMinName,
				extname		: '.css'
			}))
			.pipe(less({
				sourceMap			: true,
				compress			: true,
				sourceMapURL		: loc.sourceMapURL,
				sourceMapBasepath	: loc.css
			}))
			.pipe(gulp.dest(loc.markupCss));
});

gulp.task('jade', function() {
	var exclude = __dirname + '/'+ loc.jade + '/files/**/*.html';

	return gulp.src(JADE_FILES)
			.pipe(jadeInherit({basedir: loc.jade}))
			.pipe(jade({
				locals	: require(loc.jadeData + '/' + loc.jadeDataRes),
				pretty	: true
			}))
			.pipe(ignore.exclude(exclude))
			.pipe(gulp.dest(loc.markup));
});

gulp.task('mergeJson', function() {
	return gulp.src(loc.jadeData + '/**/*.json')
			.pipe(extend(loc.jadeDataRes))
			.pipe(gulp.dest(loc.jadeData));
});

gulp.task('webserver', ['build'], function() {
	browserSync(SERVER_CONF);
});

gulp.task('clear', function(cb) {
	return gulp
			.src([
				loc.build,
				loc.markup,
				'./node_modules',
				'npm-debug.log',
			], {read : false})
			.pipe(clear({force : true}));
});

gulp.task('copy', function() {
	gulp
		.src(loc.markup + '/*')
		.pipe(gulp.dest(loc.build + '/markup'));

	gulp
		.src(loc.images + '/*')
		.pipe(gulp.dest(loc.build + '/images'));
});

gulp.task('watch', ['setWatch', 'webserver'], function() {
	var jadeWatcher;

	jadeWatcher = gulp.watch(loc.jade + '/**/*.jade', ['jade', browserSync.reload]);
	gulp.watch(loc.css + '/**/*.less', ['less']);

	jadeWatcher.on('change', function(e) {
		JADE_FILES = e.path;
	});
});

gulp.task('default', ['watch']);
gulp.task('build', ['js', 'jade', 'less']);
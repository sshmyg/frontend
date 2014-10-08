var gulp		= require('gulp'),
	less		= require('gulp-less-sourcemap'),
	sass		= require('gulp-ruby-sass'),
	clean		= require('gulp-rimraf'),
	jade		= require('gulp-jade'),
	sprite		= require('gulp.spritesmith'),
	browserify	= require('browserify'),
	watchify	= require('watchify'),
	source		= require('vinyl-source-stream'),
	rename		= require('gulp-rename'),
	webserver	= require('gulp-webserver'),
	changed		= require('gulp-changed'),
	extend		= require('gulp-extend'),
	loc = {
		root		: 'app',
		build		: 'build',

		markup		: 'app/markup',

		jade		: 'app/jade',
		jadeData	: './app/jade/files/data',
		jadeDataRes	: 'result.json',

		js			: 'app/js',

		css			: 'app/css',
		less		: 'app/css/less',
		sass		: 'app/css/sass',

		images		: 'app/images',

		/* JS */
		jsInit		: './app/js/init.js',
		jsMin		: 'main.min.js',


		/* CSS */
		allCssMinName	: 'all.min',
		sourceMapURL	: '../css/all.min.css.map',
		lessAll			: 'app/css/less/all.less',
		sassAll			: 'app/css/sass/all.scss'
	},
	CSS_ENGINE	= 'less', //less, sass
	SERVER_CONF	= {
		livereload	: true,
		port		: 8080,
		open		: '/markup',
		fallback	: '/markup/index.html',
		directoryListing: {
			enable: true,
			path: loc.root,
			options: undefined
		}
	},
	BROWSERIFY_CONF = {
		debug : true,
		extensions : ['.html'],
		bundleConfigs : [
			{
				entries		: loc.jsInit,
				dest		: loc.js,
				outputName	: loc.jsMin
			}
		]
	};

gulp.task('js', function() {
	//https://github.com/greypants/gulp-starter
	var applyBrowserify = function(conf) {
		var bundler = browserify({
				cache		: {},
				packageCache: {},
				fullPaths	: true,
				entries		: conf.entries,
				extensions	: BROWSERIFY_CONF.extensions,
				debug		: BROWSERIFY_CONF.debug
			}),
			bundle = function() {
				return bundler
						.bundle()
						.pipe(source(conf.outputName))
						.pipe(gulp.dest(conf.dest))
			};

		bundler = watchify(bundler);

		bundler.on('update', bundle);

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
				sourceMapBasepath	: loc.less
			}))
			.pipe(gulp.dest(loc.css));
});

gulp.task('sass', function () {
	return gulp.src(loc.sassAll)
			.pipe(rename({
				basename	: loc.allCssMinName,
				extname		: '.css'
			}))
			.pipe(sass({
				sourcemap	: loc.css + '/' + loc.allCssMinName + '.css.map',
				style		: 'compressed'
			}))
			.pipe(gulp.dest(loc.css));
});

gulp.task('jade', function() {
	return gulp.src(loc.jade + '/*.jade')
			.pipe(changed(loc.markup))
			.pipe(jade({
				locals	: require(loc.jadeData + '/' + loc.jadeDataRes),
				pretty	: true
			}))
			.pipe(gulp.dest(loc.markup));
});

gulp.task('mergeJson', function() {
	return gulp.src(loc.jadeData + '/**/*.json')
			.pipe(extend(loc.jadeDataRes))
			.pipe(gulp.dest(loc.jadeData));
});

gulp.task('webserver', function() {
	return gulp
			.src(loc.root)
			.pipe(webserver(SERVER_CONF));
});

gulp.task('clean', function(cb) {
	return gulp
			.src([
				loc.jsMin,
				loc.build,
				loc.markup,
				loc.css + '/' + loc.allCssMinName + '.css',
				loc.css + '/' + loc.allCssMinName + '.css.map',
				loc.js + '/lib',
				'./node_modules',
				'npm-debug.log',
			], {read : false})
			.pipe(clean({force : true}));
});

gulp.task('copy', function() {
	gulp
		.src(loc.markup + '/*')
		.pipe(gulp.dest(loc.build + '/markup'));

	gulp
		.src(loc.images + '/*')
		.pipe(gulp.dest(loc.build + '/images'));

	gulp
		.src([
			loc.minJs
		])
		.pipe(gulp.dest(loc.build + '/js'));

	gulp
		.src([
			loc.css + '/' + loc.allCssMinName + '.css',
			loc.css + '/' + loc.allCssMinName + '.css.map'
		])
		.pipe(gulp.dest(loc.build + '/css'));
});

gulp.task('watch', function() {
	gulp.watch(loc.less + '/**/*.less', ['mergeJson', 'less']);
	gulp.watch(loc.sass + '/**/*.scss', ['mergeJson', 'sass']);
	gulp.watch(loc.jade + '/**/*.jade', ['mergeJson', 'jade']);
});

gulp.task('default', ['mergeJson', 'jade', CSS_ENGINE, 'js', 'webserver', 'watch']);
gulp.task('build', ['mergeJson', 'jade', CSS_ENGINE, 'js', 'copy']);
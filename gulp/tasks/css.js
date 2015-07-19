module.exports = function(gulp) {
    var gulpCompass = require('gulp-compass'),
        spawn = require('child_process').spawn,
        loc = gulp.cfg.loc;

    /*gulp.task('css', function () {
        return gulp.src(loc.cssFiles)
                .pipe(gulpCompass({
                    http_path: '/',
                    //generated_images_path: '/',
                    css: loc.cssBuild,
                    sass: loc.css,
                    image: loc.images,
                    font: loc.font,
                    sourcemap: true,
                    style: 'compressed',
                    relative: true,
                    environment: 'production'
                }))
                .on('error', function(error) {
                  console.log(error);
                  this.emit('end');
                })
                .pipe(gulp.dest(loc.cssBuild));
    });*/

    gulp.task('css', function () {
        spawn('compass', [
            'compile',
            
            '--http-path',
            '/',

            '--css-dir',
            loc.cssBuild,

            '--sass-dir',
            loc.css,

            '--images-dir',
            loc.images,

            '--fonts-dir',
            loc.font,

            '--output-style',
            'compressed',

            '--sourcemap',

            '--environment',
            'production'
        ], {cwd: process.cwd()});
    });
};
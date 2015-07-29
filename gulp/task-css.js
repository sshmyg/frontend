module.exports = function(gulp) {
    'use strict';
    
    var gulpCompass = require('gulp-compass'),
        spawn = require('child_process').spawn;

    gulp.task('css', function () {
        return gulp.src('app/css/**/*.scss')
                .pipe(gulpCompass({
                    http_path: '/',
                    css: 'app/build/css',
                    sass: 'app/css',
                    image: 'app/images',
                    font: 'app/css/font',
                    sourcemap: true,
                    style: 'compressed',
                    relative: false,
                    environment: 'production'
                }))
                .on('error', function(error) {
                  console.log(error);
                  this.emit('end');
                })
                .pipe(gulp.dest('app/build/css'));
    });

    //Use compass directly
    /*gulp.task(taskName, function () {
        var stdout = '',
            stderr = '',
            childProccess = spawn('compass', [
                'compile',
                
                '--http-path',
                '/',

                '--css-dir',
                'app/build/css',

                '--sass-dir',
                'app/css',

                '--images-dir',
                'app/images',

                '--fonts-dir',
                'app/css/font',

                '--output-style',
                'compressed',

                '--sourcemap',

                '--environment',
                'production'
            ], {
                cwd: process.cwd()
            });

        //Log compass proccess
        childProccess.stdout.setEncoding('utf8');
        childProccess.stdout.on('data', function(data) {
            stdout += data;
            console.log(data);
        });

        //Log compass errros
        childProccess.stderr.setEncoding('utf8');
        childProccess.stderr.on('data', function(data) {
            stderr += data;
            if (!data.match(/^\u001b\[\d+m$/)) {
                console.log(data);
            }
        });
    });*/
};
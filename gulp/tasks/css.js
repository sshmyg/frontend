module.exports = function(taskName, gulp, loc) {
    'use strict';
    
    var gulpCompass = require('gulp-compass'),
        spawn = require('child_process').spawn;

    gulp.task(taskName, function () {
        return gulp.src(loc.cssFiles)
                .pipe(gulpCompass({
                    http_path: '/',
                    css: loc.cssBuild,
                    sass: loc.css,
                    image: loc.images,
                    font: loc.font,
                    sourcemap: true,
                    style: 'compressed',
                    relative: false,
                    environment: 'production'
                }))
                .on('error', function(error) {
                  console.log(error);
                  this.emit('end');
                })
                .pipe(gulp.dest(loc.cssBuild));
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
'use strict';

var
    del      = require('del'),
    index    = require('serve-index'),

    gulp     = require('gulp'),
    eslint   = require('gulp-eslint'),
    istanbul = require('gulp-istanbul'),
    jasmine  = require('gulp-jasmine'),
    jscs     = require('gulp-jscs'),
    serve    = require('gulp-serve'),
    tap      = require('gulp-tap');

gulp.task('clean', function (done) {
    del(['coverage'], function (err) {
        if (err) {
            throw err;
        }
        done();
    });
});

gulp.task('lint', function () {
    return gulp.src(['gulpfile.js', 'lib/**/*.js', 'tests/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(jscs());
});

gulp.task('serve', serve({
    middleware: function (req, res, done) {
        return index('coverage', {
           filter: false,
           hidden: true,
           icons: true,
           stylesheet: false,
           template: false,
           view: 'details'
       })(req, res, done);
    },
    port: 3333,
    root: 'coverage'
}));

gulp.task('test', ['clean'], function (done) {
    gulp.src(['lib/**/*.js'])
        .pipe(istanbul())
        .pipe(tap(function (file) {
            require(file.path);
        }))
        .on('end', function () {
            gulp.src(['tests/**/*.spec.js'])
                .pipe(jasmine())
                .pipe(istanbul.writeReports({
                    dir: 'coverage',
                    reporters: ['lcov', 'text-summary']
                }))
                .on('end', done);
        });
});

gulp.task('default', ['lint', 'test']);

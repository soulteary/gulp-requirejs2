'use strict';

var gulp = require('gulp');

var concat = require('gulp-concat');
var fs = require('fs');
var uglyfly = require('gulp-uglyfly');
var lintAll = require('gulp-lint-everything')({jshint: '.jshintrc'});


gulp.task('default', ['scripts:lint'], function () {});

gulp.task('scripts:build', function () {
    return gulp.src('./src/index.js')
        .pipe(uglyfly())
        .pipe(concat("index.js"))
        .pipe(gulp.dest("./"));
});

gulp.task('scripts:lint', ['scripts:build'], function () {
    return lintAll("./src/index.js");
});


'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-minify-css');
const concat = require('gulp-concat');
 
gulp.task('sass', () => {

  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS({keepSpecialComments : 0}))
    .pipe(concat('framework.css'))
    .pipe(gulp.dest('./dist/'));
});
 
gulp.task('watch', () => {
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);

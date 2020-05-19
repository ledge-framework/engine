'use strict';

var Fiber = require('fibers');
var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('sass');

gulp.task('sass', function () {
  return gulp.src('./src/lib/theme/*.scss')
    .pipe(sass({fiber: Fiber}).on('error', sass.logError))
    .pipe(gulp.dest('./prebuild-theme'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./src/lib/theme/*.scss', (done) => {
      gulp.series(['sass'])(done);
  });
});


gulp.task('default', gulp.series(['sass']));

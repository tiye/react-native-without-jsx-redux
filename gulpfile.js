
var gulp = require('gulp')
var decaffeinate = require('gulp-decaffeinate')
var watch = require('gulp-watch')
var debug = require('gulp-debug');
var plumber = require('gulp-plumber');

gulp.task('watch', function() {
  gulp.src('coffee/**/*.coffee')
  .pipe(watch('coffee/**/*.coffee'))
  .pipe(plumber())
  .pipe(decaffeinate())
  .pipe(debug({title: 'coffee:'}))
  .pipe(gulp.dest('app/'))
})

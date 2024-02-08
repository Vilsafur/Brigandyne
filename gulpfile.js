const gulp = require('gulp');
const { watch, src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(cb) {
  src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css/'));
  cb()
}

exports.default = function(cb) {
  css(cb)
}
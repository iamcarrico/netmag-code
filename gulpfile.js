'use strict';

var gulp = require('gulp');
var paths = require('compass-options').dirs();
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var stripDebug = require('gulp-strip-debug');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

var include = require('gulp-inc');
var marked = require('marked');

// A few config folders that are not included in Compass.
paths.sourceJs = '_js';
paths.html = '_html';


//////////////////////////////
// Compile our Sass, and save the output.
//////////////////////////////
gulp.task('sass', function() {
  return gulp.src(paths.sass + '/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: paths.css,
      sass: paths.sass,
      bundle_exec: true,
      time: true
    }))
    .pipe(prefix(["last 1 version", "> 1%", "ie 8"]))
    .pipe(gulp.dest(paths.css))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.css));
});

//////////////////////////////
// Lint all JavaScript
//////////////////////////////
gulp.task('lint', function () {
  return gulp.src([
      paths.sourceJs + '/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});

//////////////////////////////
// Concatenate & Minify JS
//////////////////////////////
gulp.task('scripts', function() {
  return gulp.src(paths.sourceJs + '/**/*.js')
    // Concatenate everything within the JavaScript folder.
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(paths.js))
    .pipe(rename('scripts.min.js'))
    // Strip all debugger code out.
    .pipe(stripDebug())
    // Minify the JavaScript.
    .pipe(uglify())
    .pipe(gulp.dest(paths.js));
});

//////////////////////////////
// Inject our README into the index.html
//////////////////////////////
gulp.task('inject', function() {
  return gulp.src(paths.html + '/*.html')
    .pipe(include({
      preproccesor: marked
    }))
    .pipe(gulp.dest('./'));
});

//////////////////////////////
// Watch task
//////////////////////////////
gulp.task('watch', function () {
  gulp.watch(paths.js + '/**/*.js', ['lint']);
  gulp.watch(paths.sass + '/**/*.scss', ['sass']);
  gulp.watch([paths.html + '/*.html', 'README.md'], ['inject']);
});

//////////////////////////////
// Default task
//////////////////////////////
gulp.task('default', ['lint', 'scripts', 'sass', 'watch']);


//////////////////////////////
// Server Task & alias
//////////////////////////////
gulp.task('serve', ['server']);

gulp.task('server', function(cb) {
  return runSequence(
    ['scripts', 'sass', 'inject'],
    ['browserSync', 'watch'],
    cb
  );
});


//////////////////////////////
// BrowserSync Task
//////////////////////////////
gulp.task('browserSync', function () {
  browserSync.init([
    './css/*.css',
    './index.html',
  ], {
    server: {
      baseDir: '.'
    }
  });
});

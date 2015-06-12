var sharedConfig = require('../gulp-tasks/shared-config');
var scripts = sharedConfig.scripts;
var taskError = sharedConfig.taskError;
var src = sharedConfig.src;

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var streamqueue = require('streamqueue');

gulp.task('scripts', ['vendor'], function() {
  return streamqueue({ objectMode: true },
    gulp.src(scripts.prev_js.src),
    gulp.src(scripts.js.src)
    )
  .on('error', taskError)
  .pipe(plugins.concat(scripts.js.name))
  .on('error', taskError)
  .pipe(gulp.dest(scripts.js.dest));
});

gulp.task('vendor', function(){
  return gulp.src(scripts.vendor.src)
  .pipe(gulp.dest(scripts.vendor.dest));
});

gulp.task('scripts-min', ['scripts'], function(){
  return gulp.src([scripts.js.dest,'*.js'].join('/'))
  .pipe(plugins.uglify())
  .on('error', taskError)
  .pipe(gulp.dest(scripts.js.dest));
});

gulp.task('watch-scripts', function(){
  return gulp.watch([scripts.prev_js.src, scripts.js.src], ['scripts'])
  .on('change', sharedConfig.watcherLog);
});
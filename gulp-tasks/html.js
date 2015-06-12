var sharedConfig = require('../gulp-tasks/shared-config');
var html = sharedConfig.html;
var taskError = sharedConfig.taskError;

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('html', function() {
  return gulp.src(html.src)
  .pipe(gulp.dest(html.dest));
});

gulp.task('html-min', ['html'], function() {
  return gulp.src([html.dest, '*.html'].join('/'))
  .pipe(plugins.htmlmin({
    collapseWhitespace: true,
    removeComments: true,
    removeScriptTypeAttributes: true,
    removeOptionalTags: true,
    minifyJS: true,
    minifyCSS:true
  }))
  .on('error', taskError)
  .pipe(gulp.dest(html.dest));
});

gulp.task('watch-html', function(){
  return gulp.watch(html.src, ['html'])
  .on('change', sharedConfig.watcherLog);
});

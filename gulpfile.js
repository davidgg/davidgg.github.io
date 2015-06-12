var gulp = require('gulp');
var requireDir = require('require-dir');
var plugins = require('gulp-load-plugins')();
var del = require('del');

var loadGulpTasks = requireDir('./gulp-tasks');

gulp.task('default', ['build', 'dev']);
gulp.task('prod', ['build', 'minify-uglify']);

gulp.task('build', ['clean', 'html', 'scripts', 'img', 'sprites', 'sass']);
gulp.task('dev', ['browser-sync', 'watchers']);

gulp.task('minify-uglify', ['css-min', 'html-min', 'scripts-min']);

gulp.task('watchers', [
  'watch-html',
  'watch-img',
  'watch-scripts',
  'watch-styles',
  'watch-sprites'
  ]);

// Clean output directories
gulp.task('clean', function() {
  del.sync([
    'img/*',
    'css/*',
    'js/*'
    ]);
});
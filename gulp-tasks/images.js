var sharedConfig = require('../gulp-tasks/shared-config');
var imgs = sharedConfig.img;
var taskError = sharedConfig.taskError;

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var pngquant = require('imagemin-pngquant');

gulp.task('img', function(){
  return gulp.src(imgs.src)
  .pipe(plugins.imagemin({
    progressive: true,
    optimizationLevel: 2,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest(imgs.dest));
});

gulp.task('watch-img', function(){
  return gulp.watch(imgs.src, ['img'])
  .on('change', sharedConfig.watcherLog);
});
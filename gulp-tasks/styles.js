var sharedConfig = require('../gulp-tasks/shared-config');
var styles = sharedConfig.styles;
var sprites = sharedConfig.styles.sprites;
var taskError = sharedConfig.taskError;

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var streamqueue = require('streamqueue');

gulp.task('sass', function() {
  return streamqueue({ objectMode: true },
    gulp.src(styles.reset_css),
    gulp.src(styles.scss)
    .pipe(plugins.sass()).on('error', taskError)
    )
  .on('error', taskError)
  .pipe(plugins.concat(styles.name))
  .on('error', taskError)
  .pipe(gulp.dest(styles.dest));
});

gulp.task('sprites', ['sass'], function(){
  return gulp.src(sprites.src)
  .pipe(plugins.spritesmith({
    imgName: sprites.name,
    imgPath: sprites.destName,
    cssName: sprites.css
  }))
  .on('error', taskError)
  .pipe(gulp.dest(sprites.dest));
});

gulp.task('css-min', ['sass'], function() {
  return gulp.src([styles.dest, styles.name].join('/'))
  .pipe(plugins.minifyCss())
  .on('error', taskError)
  .pipe(gulp.dest(styles.dest));
});

gulp.task('watch-styles', function(){
  return gulp.watch(styles.scss, ['sass'])
  .on('change',sharedConfig.watcherLog);
});

gulp.task('watch-sprites', function(){
  return gulp.watch(styles.sprites.src, ['sprites'])
  .on('change', sharedConfig.watcherLog);
});

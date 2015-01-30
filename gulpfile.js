var gulp = require('gulp');

var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

var concat = require('gulp-concat');
var streamqueue = require('streamqueue');

var gulpif = require('gulp-if');
var del = require('del');

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var spritesmith = require('gulp.spritesmith');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;

var taskError = function(error){ console.log(error.toString());this.emit('end'); };

var src={
  js:   "src/js/*.js",
  scss: "src/scss/**/*.scss",
  html: "src/html/**/*.html",
  img: "src/img/*",
  sprites: "src/img/sprites/*",
  reset_css: ['src/css/normalize.css', 'src/css/main.css'],
  prev_js: ['src/js/prev/*.js'],
  vendor: ['src/js/vendor/**/*.js']
};

var config = {
  production: true
}

var local_address = "localhost:8000";

gulp.task('set-development', function(){config.production = false;});
gulp.task('dev', ['set-development', 'clean', 'html', 'scripts', 'img', 'sprites', 'sass','browser-sync', 'watch']);
gulp.task('default', ['clean', 'html', 'scripts', 'img', 'sprites', 'sass']);


// Transform scss to css, minify it and concat all
gulp.task('sass', function() {
  return streamqueue({ objectMode: true },
    gulp.src(src.reset_css),
    gulp.src(src.scss).pipe(sass()).on('error', taskError)
    )
  .pipe(gulpif(config.production, minifyCSS()))
  .on('error', taskError)
  .pipe(concat('all.css'))
  .pipe(gulp.dest('css'))
  .on('error', taskError);
});

// Uglify JS and concat all
gulp.task('scripts', function() {

  gulp.src(src.vendor)
  .pipe(gulp.dest('js/vendor'));

  return streamqueue({ objectMode: true },
    gulp.src(src.prev_js),
    gulp.src(src.js)
    )
  .pipe(gulpif(config.production, uglify()))
  .on('error', taskError)
  .pipe(concat('app.js'))
  .pipe(gulp.dest('js'))
  .on('error', taskError);

});

//Minimify HTML
gulp.task('html', function() {
  gulp.src(src.html)
  .pipe(gulpif(config.production, htmlmin({
    collapseWhitespace: true,
    removeComments: true,
    removeScriptTypeAttributes: true,
    removeOptionalTags: true,
    minifyJS: true,
    minifyCSS:true
  })))
  .on('error', taskError)
  .pipe(gulp.dest('.'));
});

gulp.task('img', function(){
  gulp.src(src.img)
  .pipe(imagemin({
    progressive: true,
    optimizationLevel: 2,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('img'))
});

gulp.task('sprites', function(){
  gulp.src(src.sprites).pipe(spritesmith({
    imgName: 'sprites.png',
    imgPath: '../img/sprites/sprites.png',
    cssName: '../../src/scss/includes/_sprites.scss'
  }))
  .pipe(gulp.dest('img/sprites'));
});

// Clean output directories
gulp.task('clean', function(){
  del.sync([
    'img/*',
    'css/*',
    'js/*'
    ]);
});


// Load browser
gulp.task('browser-sync', function() {
  browserSync({
    proxy: local_address
  });
});


// Waits for JS AND SCSS changes
gulp.task('watch', function(){
  var watcher;
  var watchers_list = [
  {task: 'scripts', route: src.js},
  {task: 'sass', route: src.scss},
  {task: 'html', route: src.html},
  {task: 'img', route: src.img},
  {task: 'sprites', route: src.sprites}
  ];

  for(var i = 0; i < watchers_list.length; i++){
    watcher = watchers_list[i];

    gulp.watch(watcher.route, [watcher.task, reload])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
  }

});



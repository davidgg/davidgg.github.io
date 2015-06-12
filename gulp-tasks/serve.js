var gulp = require('gulp');
var sharedConfig = require('../gulp-tasks/shared-config');
var server =  sharedConfig.server;
var browser =  sharedConfig.browser_sync;

var browserSync = require('browser-sync');
var nodemon = require('nodemon');

/*
* Copied and adapted from https://github.com/sogko/gulp-recipes/blob/master/browser-sync-nodemon-expressjs/gulpfile.js
*/

// we'd need a slight delay to reload browsers
// connected to browser-sync after restarting nodemon
var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', function (cb) {
  var called = false;

  return nodemon({
    script: server.script,
    watch: server.watch
  })
  .on('start', function onStart() {
    // ensure start only got called once
    if (!called) { cb(); }
    called = true;
  })
  .on('restart', function onRestart() {
    // reload connected browsers after a slight delay
    setTimeout(function reload() {
      browserSync.reload({
        stream: false
      });
    }, BROWSER_SYNC_RELOAD_DELAY);

  });
});

gulp.task('browser-sync', ['nodemon'], function () {
  browserSync.init({
    files: browser.watch,
    // real server address
    proxy: [server.local_address, server.local_port].join(':'),

    // default port
    port: 3000
  });

  //fix image
  return gulp.watch('img/**/*.png')
  .on('change',  function(event) {
    browserSync.reload();
    sharedConfig.watcherLog(event);
  });
});

module.exports = {
  html:{
    src: './src/html/**/*.html',
    dest: './'
  },
  scripts: {
    js: {
      src: './src/js/*.js',
      dest: './js',
      name: 'app.js'
    },
    prev_js: {
      src: './src/js/prev/*.js'
    },
    vendor:{
      src: './src/js/vendor/**/*.js',
      dest: './js/vendor'
    }
  },
  img: {
    src: './src/img/*',
    dest: './img'
  },
  styles: {
    reset_css: ['./src/css/normalize.css', './src/css/main.css'],
    scss: './src/scss/**/*.scss',
    dest: './css',
    name: 'all.css',

    sprites: {
      src: './src/img/sprites/*',
      destName: '../img/sprites/sprites.png',
      css: '../../src/scss/includes/_sprites.scss',
      name: 'sprites.png',
      dest: './img/sprites',
    }
  },
  server: {
    script: './gulp-tasks/server/express-server.js',
    local_address: '127.0.0.1',
    local_port: 9090,
    watch: []
  },
  browser_sync: {
    watch: ['./css/**/*', './*.html', './js/**/*', './img/**/*.png']
  },
  taskError: function(error) { console.log(error.toString()); this.emit('end');},
  watcherLog: function(event) { console.log('File ' + event.path + ' was ' + event.type + ', running tasks...'); }
};
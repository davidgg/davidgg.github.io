const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: './assets/css/[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

const htmlMinOpts = {
  collapseWhitespace: true,
  removeComments: true,
  removeScriptTypeAttributes: true,
  removeOptionalTags: false,
  minifyJS: true,
  minifyCSS: true
};

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: './assets/bundle.[chunkhash].js',
    path: __dirname
  },
  resolve: {
    modules: ['node_modules', 'assets']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loaders: ['file-loader?name=assets/img/[name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            progressive: true,
            pngquant: {},
            optipng: {
              optimizationLevel: 2
            }
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: './index.html',
      minify: htmlMinOpts,
      hash: true,
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/html/cookies.html',
      filename: './cookies.html',
      minify: htmlMinOpts,
      hash: true,
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/html/404.html',
      filename: './404.html',
      minify: htmlMinOpts,
      hash: true,
      inject: true,
    }),
    new SpritesmithPlugin({
      src: {
        cwd: './src/img/sprites',
        glob: '*.png'
      },
      target: {
        image: './src/img/sprite.png',
        css: './src/scss/base/_sprite.scss'
      },
      apiOptions: {
        cssImageRef: '/assets/img/sprite.png'
      }
    }),
    extractSass
  ]
};

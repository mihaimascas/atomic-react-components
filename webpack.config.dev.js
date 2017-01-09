const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer-core');

// Specify what theme will the dev webpack config will serve
// Change during development time to test layout for different themes. Available themes : red, blue, gray (default)
// Restart dev server after changing theme: `npm run start`
const THEME = 'gray';

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './site/src/index'
  ],

  output: {
    path: path.join(__dirname, 'dist', 'site'),
    filename: 'bundled.js',
    publicPath: '/static/site/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname)
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?source-map',
          'postcss-loader',
          'sass?sourceMap'
        ],
        include: path.join(__dirname)
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        exclude: /node_modules/,
        loader:'url-loader?limit=10024&name=images/' + THEME + '/[name]_[hash].[ext]',
        include: path.join(__dirname)
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=fonts/' + THEME + '/[name]_[hash].[ext]',
        include: path.join(__dirname)
      }
    ]
  },

  postcss: [autoprefixer({
    // https://github.com/ai/browserslist
    browsers: ['last 2 version', 'ie 9', 'ios 7', 'android 4']
  })],

  sassLoader: {
    // Overwrites $theme SCSS variable.
    // Possible values: red, gray
    data: '$theme: "' + THEME + '";'
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      // absolute path to pattern library
      'atomic-react-components': path.resolve(__dirname, 'src')
    }
  }
};

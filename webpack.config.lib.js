'use strict';

var webpack = require('webpack');
var path = require('path');

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  );
}

module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'ignore-loader'
      },
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'library.js',
    publicPath: '/static/',
    // Library setup
    library: 'atomic-react-components',
    libraryTarget: 'umd'
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js'],
    alias: {
      // absolute path to pattern library
      'atomic-react-components': path.resolve(__dirname, 'src')
    }
  }
};
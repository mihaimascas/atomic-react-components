var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer-core');

var
  args = process.argv.slice(2),
  themeArgIndex = args.length ? args.indexOf('--theme') : -1,
  themeName = 'gray'; //default theme

if (themeArgIndex >= 0 && args[themeArgIndex + 1]) {
  themeName = args[themeArgIndex + 1];
}

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('style--' + themeName + '.css', {
      allChunks: true
    })
  ],
  postcss: [autoprefixer({
    // https://github.com/ai/browserslist
    browsers: ['last 5 version']
  })],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader!sass-loader?sourceMap')
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        exclude: /node_modules/,
        loader:'url-loader?limit=1024&name=images/[name]-[hash].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=fonts/[name]-[hash].[ext]'
      }
    ]
  },
  sassLoader: {
    // Overwrites $theme SCSS variable.
    // Possible values: red, gray
    data: '$theme: "' + themeName + '";'
  }
};
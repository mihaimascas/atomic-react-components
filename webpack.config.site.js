var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Extract theme name from argments
var
  args = process.argv.slice(2),
  themeArgIndex = args.length ? args.indexOf('--theme') : -1,
  themeName = 'gray'; //default theme

// Plugins for bot production and development
var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new ExtractTextPlugin('site-style--' + themeName + '.css', {
    allChunks: true
  })
];

// Plugins only for production build
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
    './site/src/index'
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
  output: {
    path: path.join(__dirname, 'dist/site'),
    filename: 'bundled.js',
    publicPath: '/static/site/',
  },
  plugins: plugins,
  sassLoader: {
    // Overwrites $theme SCSS variable.
    // Possible values: red, gray
    data: '$theme: "' + themeName + '";'
  },
  postcss: [autoprefixer({
    // https://github.com/ai/browserslist
    browsers: ['last 2 version', 'ie 9', 'ios 7', 'android 4']
  })],
  resolve: {
    extensions: ['', '.js'],
    alias: {
      // absolute path to pattern library
      'atomic-react-components': path.resolve(__dirname, 'src')
    }
  }
};
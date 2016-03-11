'use strict';
/*eslint-env node*/
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./webpack.config.js');

config.module.loaders = config.module.loaders.concat([{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel',
}, {
  test: /\.scss$/,
  exclude: /node_modules/,
  loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?outputStyle=compressed'),
}]);

config.output.filename = 'bundle.min.js';

config.plugins = config.plugins.concat([
  new ExtractTextPlugin('[name].min.css'),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    output: { comments: false },
  }),
]);

module.exports = config;

'use strict';
/*eslint-env node*/
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./webpack.config.js');

config.devtool = '#cheap-module-source-map';

config.module.loaders = config.module.loaders.concat([{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel',
}, {
  test: /\.scss$/,
  exclude: /node_modules/,
  loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?outputStyle=compressed'),
}]);

config.output.filename = '[name].min.js';

config.plugins = config.plugins.concat([
  new ExtractTextPlugin('[name].min.css'),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: { warnings: false },
    output: { comments: false },
  }),
]);

module.exports = config;

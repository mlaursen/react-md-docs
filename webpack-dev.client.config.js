const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack.config')();

config.cache = true;
config.entry = [
  'webpack-hot-middleware/client',
  'babel-polyfill',
  path.resolve(process.cwd(), 'src', 'js', 'index.jsx'),
];
config.module.loaders = config.module.loaders.concat([config.__imgLoader, {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'react-hot!babel',
}, {
  test: /\.scss$/,
  exclude: /node_modules/,
  loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?outputStyle=expanded&sourceMap'),
}]);

config.output.filename = '[name].js';
config.output.path = path.resolve(process.cwd(), 'dist', 'client');

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('[name].css', { allChunks: true }),
  new HtmlWebpackPlugin(config.__htmlWebpackOptions),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  }),
]);

module.exports = config;

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const PORT = process.env.PORT || 8080;
const DEV_URL = `http://localhost:${PORT}`;
const config = require('./webpack.config')();

const DIST = path.resolve(process.cwd(), 'dist');

config.cache = true;
config.devtool = 'cheap-module-eval-source-map';
config.devServer = {
  colors: true,
  contentBase: DIST,
  devtool: config.devtool,
  historyApiFallback: true,
  host: '0.0.0.0',
  hot: true,
};

config.entry = [
  `webpack-dev-server/client?${DEV_URL}`,
  'webpack/hot/only-dev-server',
  'babel-polyfill',
  path.resolve(process.cwd(), 'src', 'js', 'index.jsx'),
];

config.module.loaders = config.module.loaders.concat([{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'react-hot!babel',
}, {
  test: /\.scss$/,
  exclude: /node_modules/,
  //loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?outputStyle=expanded&sourceMap'),
  loader: 'style!css!postcss!sass?outputStyle=expanded&sourceMap',
}, Object.assign({}, config.__imgLoader, { loader: 'file' + config.__imgLoader.loader })]);

config.output.filename = '[name].js';
config.output.path = DIST;

config.plugins = config.plugins.concat([
  new OpenBrowserPlugin({ url: DEV_URL }),
  new webpack.HotModuleReplacementPlugin(),
  //new ExtractTextPlugin('[name].css', { allChunks: true }),
  new HtmlWebpackPlugin(Object.assign({}, config.__htmlWebpackOptions, {
    filename: 'index.html',
  })),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  }),
]);

module.exports = config;

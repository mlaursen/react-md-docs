'use strict';
/*eslint-env node*/
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const port = 8080;
const devUrl = `http://localhost:${port}`;

const config = require('./webpack.config.js');
config.cache = true;
config.devServer = {
  contentBase: config.__buildFolder,
  devtool: '#eval-source-map',
  historyApiFallback: {
    index: `/${config.__publicPath}/`,
  },
  hot: true,
  port: port,
};
config.devtool = '#eval-source-map';
config.entry = [
  `webpack-dev-server/client?${devUrl}`,
  'webpack/hot/only-dev-server',
].concat(config.entry);

config.module.loaders = config.module.loaders.concat([{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'react-hot!babel',
}, {
  test: /\.scss$/,
  exclude: /node_modules/,
  loader: 'style!css!postcss!sass?outputStyle=expanded&sourceMap=true',
}]);

config.output.filename = 'bundle.js';
config.output.publicPath = `/${config.__publicPath}/`;

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  }),
  new OpenBrowserPlugin({ url: `${devUrl}/${config.__publicPath}/` }),
]);

module.exports = config;

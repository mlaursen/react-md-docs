const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = require('./webpack.config')();
config.entry = path.resolve(process.cwd(), 'src', 'server');
config.target = 'node';
config.externals = [nodeExternals()],
config.module.loaders = config.module.loaders.concat([{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel',
}]);
config.output.filename = 'server.js';
config.output.path = path.resolve(process.cwd(), 'dist', 'server');
config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  }),
  new webpack.NormalModuleReplacementPlugin(/\.scss$/, 'node-noop'),
]);

module.exports = config;

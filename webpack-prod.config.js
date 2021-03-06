/*eslint-env node*/
const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function makeConfig() {
  const config = require('./webpack.config')();
  config.__htmlWebpackOptions = Object.assign({}, config.__htmlWebpackOptions, {
    alwaysWriteToDisk: true,
    filename: 'index.ejs',
    googleAnalytics: 'UA-76079335-1',
    isomorphic: 'html',
  });

  config.module.loaders = config.module.loaders.concat([{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel',
  }]);

  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ]);

  return config;
}

const client = makeConfig();
client.entry = ['babel-polyfill', path.resolve(process.cwd(), 'src', 'js', 'index.jsx')],
client.name = 'client';
client.target = 'web';
client.output.filename = '[name]-[hash].min.js';
client.output.path = path.resolve(process.cwd(), 'dist', 'client');
client.module.loaders = client.module.loaders.concat([{
  test: /\.scss$/,
  exclude: /node_modules/,
  loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?outputStyle=compressed'),
}, Object.assign({}, client.__imgLoader, { loader: 'file' + client.__imgLoader.loader })]);
client.plugins = client.plugins.concat([
  new ExtractTextPlugin('[name]-[hash].min.css'),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: { warnings: false },
    output: { comments: false },
  }),
  new HtmlWebpackPlugin(client.__htmlWebpackOptions),
]);


const server = makeConfig();
server.entry = path.resolve(process.cwd(), 'src', 'server');
server.name = 'server';
server.target = 'node';
server.externals = [nodeExternals()];
server.module.loaders = server.module.loaders.concat([
  Object.assign({}, server.__imgLoader, { loader: 'url' + server.__imgLoader.loader }),
]);
server.output.filename = 'server.js';
server.output.path = path.resolve(process.cwd(), 'dist', 'server');
server.plugins = server.plugins.concat([
  new webpack.NormalModuleReplacementPlugin(/\.scss$/, 'node-noop'),
]);

module.exports = [client, server];

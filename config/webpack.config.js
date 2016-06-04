'use strict';
/*eslint-env node*/
const webpack = require('webpack'); //eslint-disable-line no-unused-vars
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildFolder = path.resolve(__dirname, '../dist');
const js = path.resolve(__dirname, '../src/js');
const nodeModules = path.resolve(__dirname, '../node_modules');
const reactmd = nodeModules + '/react-md';

module.exports = {
  __buildFolder: buildFolder,

  entry: [
    'babel-polyfill',
    `${js}/index.jsx`,
  ],

  eslint: {
    configFile: path.resolve(__dirname, '../.eslintrc'),
  },

  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: 'eslint',
      exclude: /node_modules|react-md\/lib/,
    }],

    loaders: [{
      test: /\.(png|jpe?g|svg)$/,
      exclude: /node_modules/,
      loader: 'file?name=imgs/[hash].[ext]',
    }, {
      test: /\.md$/,
      exclude: /node_modules/,
      loader: 'raw',
    }, {
      test: /\.json$/,
      exclude: /node_modules/,
      loader: 'json',
    }],
  },

  modulesDirectories: [
    nodeModules,
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.md'],
    alias: {
      // prevents multiple react versions when linked
      'react': nodeModules + '/react',
      'react-dom': nodeModules + '/react-dom',
      'helpers': reactmd + '/src/scss/helpers/_all.scss',
      'md-scss': reactmd + '/src/scss/react-md.scss',
      'md-src': reactmd + '/src/scss',
      'react-doc-page': js + '/components/DocPage.jsx',
    },

    // Fixes the npm link issue so that it doesn't search for modules in react-md
    fallback: nodeModules,
  },

  // Fixes the npm link issue so that it doesn't search for modules in react-md
  resolveLoader: {
    fallback: nodeModules,
  },

  output: {
    path: buildFolder,
    publicPath: '/',
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      favicon: path.resolve(__dirname, '../src/imgs/favicon.ico'),
    }),
  ],

  postcss: function() {
    return [autoprefixer({ browsers: ['last 2 version', 'ie >= 10']})];
  },
};

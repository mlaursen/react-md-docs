/*eslint-env node*/
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const nodeModules = path.resolve(process.cwd(), 'node_modules');
const js = path.resolve(process.cwd(), 'src', 'js');
const docgen = path.resolve(process.cwd(), 'src', 'docgen');

module.exports = () => ({
  devtool: '#cheap-module-source-map',
  eslint: {
    configFile: path.resolve(process.cwd(), '.eslintrc'),
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
      loader: 'file?name=imgs/[hash].[ext]!image-webpack',
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

  output: {
    publicPath: '/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.md'],
    alias: {
      // prevents multiple react versions when linked
      'react': nodeModules + '/react',
      'react-dom': nodeModules + '/react-dom',
      'helpers': path.resolve(process.cwd(), 'node_modules', 'react-md', 'src', 'scss', 'helpers', '_all.scss'),
      'md-scss': path.resolve(process.cwd(), 'node_modules', 'react-md', 'src', 'scss', 'react-md.scss'),
      'react-doc-page': js + '/components/DocPage.jsx',
      'docgen': docgen,
    },

    // Fixes the npm link issue so that it doesn't search for modules in react-md
    fallback: nodeModules,
  },

  // Fixes the npm link issue so that it doesn't search for modules in react-md
  resolveLoader: {
    fallback: nodeModules,
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ],

  postcss: function() {
    return [autoprefixer({ browsers: ['last 2 version', 'ie >= 10']})];
  },
});

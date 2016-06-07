/*eslint-env node*/
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const nodeModules = path.resolve(process.cwd(), 'node_modules');
const js = path.resolve(process.cwd(), 'src', 'js');

module.exports = () => ({
  __htmlWebpackOptions: {
    filename: 'index.ejs',
    inject: false,
    template: path.resolve(process.cwd(), 'src', 'template.js'),
    favicon: path.resolve(process.cwd(), 'src', 'imgs', 'favicon.ico'),
    alwaysWriteToDisk: true,

    title: 'react-md',
    appMountId: 'app',
    isomorphic: 'html',
    description: 'Google\'s Material Design UI components built with React and sass.',
    keywords: 'material design,react,sass,material,ui,components,material-design',
  },

  eslint: {
    configFile: path.resolve(process.cwd(), '.eslintrc'),
  },

  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: 'eslint',
      exclude: /node_modules|react-md|tempate/,
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
    },

    // Fixes the npm link issue so that it doesn't search for modules in react-md
    fallback: nodeModules,
  },

  // Fixes the npm link issue so that it doesn't search for modules in react-md
  resolveLoader: {
    fallback: nodeModules,
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackHarddiskPlugin(), // always write the HtmlWebpackPlugin to Disk,
  ],

  postcss: function() {
    return [autoprefixer({ browsers: ['last 2 version', 'ie >= 10']})];
  },
});

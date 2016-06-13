const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'eval',
  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './app/main',
  ],
  output: {
    filename: 'index_bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel', 'eslint-loader'],
        include: [path.join(__dirname, 'app'), path.join(__dirname, 'styles')]
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css', 'sass']
      }
    ]
  }
};

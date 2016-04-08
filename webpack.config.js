var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
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
    './app/app',
  ],
  output: {
    filename: 'index_bundle.js',
    path: __dirname + 'dist',
    publicPath: '/dist/'
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
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css', 'sass']
      }
    ]
  },
  watch: true
};

var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html', 
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'source-map',
  entry: './app/app.js',    
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.optimize.UglifyJsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          // presets are all the transformations from JSX to JS that Babel will do the code
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

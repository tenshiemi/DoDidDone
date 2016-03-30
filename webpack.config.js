var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html', 
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './app/app.js',    

  output: {
    filename: "index_bundle.js",
    path: __dirname + 'dist',
    publicPath: '/dist/'
  },

  plugins: [HTMLWebpackPluginConfig],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          // presets are all the transformations from JSX to JS that Babel will do the code
          presets: ['react']
        }
      }
    ]
  }
};

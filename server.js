const express = require('express');
const path = require('path');
const webpack = require('webpack');

const server = express();

const isDevelopment = (process.env.NODE_ENV !== 'production');
const static_path = path.join(__dirname, 'dist');

server.use(express.static(static_path))
  .get('*', function(req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
  }).listen(process.env.PORT || 8080, function (err) {
    if (err) { console.log(err) };
    console.log('Listening at localhost:8080');
  });

if (isDevelopment) {
  const config = require('./webpack.config');
  const WebpackDevServer = require('webpack-dev-server');
  console.log(config.output.publicPath);

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
  }).listen(3000, 'localhost', function(err, result) {
    if (err) { console.log(err) }
    console.log('Listening at localhost:3000');
  });
}


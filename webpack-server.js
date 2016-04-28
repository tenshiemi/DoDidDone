const webpack = require('webpack');
const config = require('./webpack.config');

const appServer = (PORT) => {
  const WebpackDevServer = require('webpack-dev-server');

  const frontendServer = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    proxy: {
      "*" : `http://localhost:${PORT - 1}`
    }
  });

  frontendServer.listen(PORT, 'localhost', (err, result) => {
    if (err) { console.log(err) }
    console.log('Listening at localhost:3000');
  });
}

module.exports = appServer;

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var serverPort = process.env.npm_package_config_port;
var buildRep = process.env.npm_package_config_buildRep;
var host = process.env.npm_package_config_host;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  noInfo: true, // disable for debug purpose
  hot: true,
  contentBase: "./" + buildRep,
  historyApiFallback: true
}).listen(serverPort, host, function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at '+ host + ':' + serverPort);
});

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const serverPort = process.env.npm_package_config_port;
const buildRep = process.env.npm_package_config_port;

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:' + serverPort,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, buildRep),
    filename: 'bundle.[hash].js',
    publicPath: ''
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ],
  module: {
    loaders: [
        {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.js$/,
          loaders: ['react-hot', 'babel'],
          include: path.join(__dirname, 'src')
        },
        {
            test: /\.(ico|jpe?g|png|gif|svg)$/,
            loaders: [
                'file?name=[path][name].[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }
    ]
  }
};

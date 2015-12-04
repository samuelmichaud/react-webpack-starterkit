const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const buildRep = process.env.npm_package_config_buildRep;

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, buildRep),
    filename: 'bundle.[hash].js',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('src/styles.[hash].css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!sass')
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

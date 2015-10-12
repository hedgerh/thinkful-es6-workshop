var path = require('path');
var webpack = require('webpack');

//var host = 'localhost'
// var port = '3000'

//will help to run it on cloud9 (c9.io)
var host = process.env.IP ; 
var port = process.env.PORT ; 

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?https://'+host+':' + port,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

//var host = 'localhost'
// var port = '3000'

//will help to run it on cloud9 (c9.io)
var host = process.env.IP ; 
var port = process.env.PORT ; 


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(port, host, function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at ' + host + port);
});

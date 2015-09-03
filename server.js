var webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  config = require('./webpack.config-dev'),
  fs = require('fs'),
  request = require('request'),
  path = require('path');

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true
});

server.use(/^\/(app|uploads)\/.+/, function(req, res) {
  request('http://'+path.join('107.170.219.92', req.originalUrl)).pipe(res);
});

server.use('/*', function(req, res) {
  fs.createReadStream('index.html').pipe(res);
});

server.listen(3000, function () {
  console.log('Listen on http://localhost:3000');
});
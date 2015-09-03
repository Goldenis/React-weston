var express = require('express'),
  app = express(),
  fs = require('fs');

app.use('/assets', express.static(__dirname + '/assets'));
app.get('/*', function(req, res) {
  fs.createReadStream('index.html').pipe(res);
});

app.listen(3000);
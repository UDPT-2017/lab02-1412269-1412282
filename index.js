var express = require('express');
var app = express();

//routing
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//start server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/components', express.static('bower_components'));
//routing
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//start server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

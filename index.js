var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

app.use(express.static('public'));
app.use('/components', express.static('bower_components'));

app.engine('hbs', exphbs({}));
app.set('view engine', 'hbs');

//routes
app.get('/hbs', function (req, res) {
  res.render('index', {title: 'HBS Index Page', message: 'Hello HBS Page'});
});
app.get('/messages', function (req, res) {
  res.render('messages', {title: 'HBS Messages Page', message: 'My Messages'});
});
app.get('/users', function (req, res) {
  res.render('users', {title: 'HBS Users Page', message: 'My Users'});
});
app.get('/about', function (req, res) {
  res.render('about', {title: 'HBS About Page', message: 'My About'});
});

//start server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

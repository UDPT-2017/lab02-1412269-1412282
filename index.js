var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.use(express.static('public'));
app.use('/components', express.static('bower_components'));

app.engine('hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'application'
}));
app.set('view engine', 'hbs');

//routes
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Home',
        message: 'Hello HBS Page',
    });
});
app.get('/messages', function(req, res) {
    res.render('messages', {
        title: 'Messages',
        message: 'My Messages',
    });
});
app.get('/users', function(req, res) {
    res.render('users', {
        title: 'Users',
        message: 'My Users',
    });
});
app.get('/about', function(req, res) {
    res.render('about', {
        title: 'About',
        message: 'My About',
    });
});

//start server
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

var exphbs = require('express-handlebars');
var path = require('path');
module.exports = function(app) {
  app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'application',
    layoutsDir: path.resolve('app/views/layouts/'),
    partialsDir: path.resolve('app/views/partials'),
    helpers: {
      navbarmenu: function(title) {
        if (title == 'Home') {
          return '<li class="active"><a href="/">Home</a></li><li><a href="/messages">Messages</a></li><li><a href="/users">Users</a></li><li><a href="/about">About</a></li>';
        }
        else if(title == 'Messages'){
          return '<li><a href="/">Home</a></li><li class="active"><a href="/messages">Messages</a></li><li><a href="/users">Users</a></li><li><a href="/about">About</a></li>';
        }
        else if(title == 'Users'){
          return '<li><a href="/">Home</a></li><li><a href="/messages">Messages</a></li><li class="active"><a href="/users">Users</a></li><li><a href="/about">About</a></li>';
        }
        else {
          return '<li><a href="/">Home</a></li><li><a href="/messages">Messages</a></li><li><a href="/users">Users</a></li><li class="active"><a href="/about">About</a></li>';
        }
      }
    }
  }));

  app.set('view engine', 'hbs');
  app.set('views', path.resolve('app/views'));
};

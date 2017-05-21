//routes
var controllers = require('../app/controllers');

module.exports = function(app) {
app.get('/', controllers.home.index);

app.get('/messages', controllers.messages.index);

app.get('/users', controllers.users.index);

app.get('/about', controllers.about.index);

app.get('/signup', controllers.sign_up.index);
}

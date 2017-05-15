var usersController = {
  index: function(req, res) {
    res.render('users/users', {
        title: 'Users',
        message: 'My Users',
    });
  }
};

module.exports = usersController;

var signupController = {
  index: function(req, res) {
    res.render('sign_up/sign_up', {
      title: 'Sign up for page',
      message: 'Join page today',
      layout: 'sign_up'
    });
  }
};

module.exports = signupController;

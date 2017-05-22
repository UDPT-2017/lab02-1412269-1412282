var homeController = {
  index: function(req, res) {
    res.render('home/index', {
      title: 'Home',
      message: 'Home page',
    });
  }
};

module.exports = homeController;

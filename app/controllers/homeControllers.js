var homeController = {
  index: function(req, res) {
    res.render('home/index', {
        title: 'Home',
        message: 'Hello HBS Page',
    });
  }
};

module.exports = homeController;

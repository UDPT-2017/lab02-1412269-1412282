var aboutController = {
  index: function(req, res) {
    res.render('about/about', {
        title: 'About',
        message: 'My About',
    });
  }
};
module.exports = aboutController;

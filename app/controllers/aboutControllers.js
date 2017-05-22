var aboutController = {
  index: function(req, res) {
    res.render('about/about', {
        title: 'About',
        message: 'My Team',
    });
  }
};
module.exports = aboutController;

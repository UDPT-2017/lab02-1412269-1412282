var messagesController = {
  index: function(req, res) {
      res.render('messages/messages', {
          title: 'Messages',
          message: 'My Messages',
      });
  }
};

module.exports = messagesController;

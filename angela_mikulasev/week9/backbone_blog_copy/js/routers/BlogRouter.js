var app = app || {};

app.BlogRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'getPost',
    '*anythingElse': 'pageNotFound'
  },

  index: function () {
    var appView = new app.Views.AppView({collection: app.posts});
    appView.render();
  },

  getPost: function (slug) {
    var post = app.posts.get(slug);
    if (!post) {
      app.router.navigate('', {trigger: true});
    } else {
      var view = new app.Views.PostView({model: post});
      view.render();
    }
  },

  pageNotFound: function () {
    console.log('page not found');
  }
});
var app = app || {};
app.Views = app.Views || {};

app.Views.AppView = Backbone.View.extend({
  el: '#main',
  initialize: function () {},
  render: function () {
    var template = $('#appView').html();
    this.$el.html( template );

    this.collection.each(function (post) {
      var view = new app.Views.PostListView({model: post});
      view.render();
    });
  }
});
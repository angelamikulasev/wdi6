var app = app || {};


$(document).ready( function () {
  app.posts = new app.Collections.Posts([
    new app.Models.Post({id: 1, slug: 'first-post', title: 'First post', content: 'This is the first post'}),
    new app.Models.Post({id: 2, slug: 'second-post', title: 'Second post', content: 'This is my second post'}),
    new app.Models.Post({id: 3, slug: 'third-post', title: 'Third post', content: "This is the third"}),
    new app.Models.Post({id: 4, slug: 'forth-post', title: 'Fourth post', content: 'THIS IS THE FOURTH POST'})

    // define seed data
    ]);

  app.router = new app.BlogRouter();
  Backbone.history.start();
});








































// var app = {}; // this will be the global variable where we store everything
// app.Views = {}; 
// app.Models = {};
// app.Collections = {};

// app.BlogRouter = Backbone.Router.extend({ // class of router and what urls are avaliable
//   routes: {
//     '': 'index',
//     'posts/:id': 'getPost',
//     '*anythingElse': 'pageNotFound'
//   },

//   index: function () {
//     console.log('index page');
//     var appView  = new app.Views.AppView({collection: app.posts}); // creates appView
//     appView.render();
//   },

//   getPost: function (id) {
//     var post = app.posts.get(id);
//     if(!post) {
//       app.router.navigate('', {trigger: true});
//     } else {
//     var view= new app.Views.PostView({model: post});
//     view.render();
//     }
//   },

//   pageNotFound: function () {
//     // redirect to home page
//     console.log('page not found');
//   }
// });

// app.Models.Post = Backbone.Model.extend({
//   defaults: {
//     title: 'Untitled Post',
//     content: 'Your ad here'
//   }
// });

// app.Collections.Posts = Backbone.Collection.extend({ // collection of posts lives inside the app
//   model: app.Models.Post
// });

// app.Views.AppView = Backbone.View.extend ({ 
//   el: '#main', // knows where to appear on the page
//   initialize: function() {},
//   render: function () {
//     var template = $('#appView').html();
//     this.$el.html( template ); // get the text fro this html element and  stick on on the page 

//     this.collection.each(function (post) {
//       var view = new app.Views.PostListView({model: post});
//       view.render();
//     });
//   }
// });

// app.Views.PostView = Backbone.View.extend({
//   tagName: 'li',
//   events: {
//     'click': 'viewPost'
//   },
//   initialize: function () {},
//   render: function () {
//     var template = $('#postListView').html();
//     var postListHTML = Handlebars.compile(template);

//     this.$el.html( postViewHTML(this.model.toJSON()));
//     $('#posts').append(this.el);
//   },
//   viewPost: function () {
//     app.Router.navigate('posts/' + this.model.get('id'), {trigger: true}); // router function
//   }
// });

// app.Views.PostView = Backbone.View.extend({
//   el: '#main',
//   initialize: function () {},
//   render: function () {
//     var template = $('#postView').html();
//     var postHTML = Handlebars.complie(template);

//     this.$el.html(postHTML(this.model.toJSON()));
//   }
// });

// $(document).ready (function() {
//   app.posts = new app.Collections.Posts([
//     new app.Models.Post({id:1, title:'First post', content:'this is first'}),
//     new app.Models.Post({id:2, title:'Second post', content:'this is second'}),
//     new app.Models.Post({id:3, title:'Third post', content:'this is third'}),
//     new app.Models.Post({id:4, title:'Forth post', content:'this is forth'})
//     ]);

//   app.router = new app.BlogRouter();
//   Backbone.history.start();
// });

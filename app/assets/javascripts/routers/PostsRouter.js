Journal.Routers.PostRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new Journal.Collections.Posts();
    this.index($("div.sidebar"));
  },

  routes: {
    '': 'rootIndex',
    'posts/new': 'new',
    'posts/:id': 'show',
    'posts/:id/edit': 'edit'
  },

  rootIndex: function () {
  },

  index: function ($el) {
    this.collection.fetch({
      success: function () {
        var postsIndex = new Journal.Views.PostsIndex({ collection: this.collection });
        postsIndex.render();
        $el.html(postsIndex.$el);
      }.bind(this)
    });
  },

  show: function (id) {
    var post = this.collection.getOrFetch(id);
    var postShow = new Journal.Views.PostShow({ model: post})
    postShow.render();
    this.$rootEl.html(postShow.$el)
  },

  edit: function (id) {
    var post = this.collection.getOrFetch(id);
    var postEdit = new Journal.Views.PostForm({ model: post, collection: this.collection})
    postEdit.render();
    this.$rootEl.html(postEdit.$el)
  },

  new: function () {
    var post = new Journal.Models.Post();
    var view = new Journal.Views.PostForm( { model: post, collection: this.collection })
    view.render();
    this.$rootEl.html(view.$el);
  }

});

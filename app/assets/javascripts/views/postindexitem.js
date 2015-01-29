Journal.Views.PostsIndexItem = Backbone.View.extend({
  template: JST['posts/postIndexItem'],

  tagName: 'li',

  events: {
    "click button.delete": "delete",
    "click a": "renderShow"
  },

  initialize: function () {
    this.listenTo(this.model, "change:title", this.render)
  },

  render: function() {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  delete: function(event) {
    event.preventDefault();
    this.model.destroy();
  },

  renderShow: function(event) {
    var url = 'posts/' + this.model.id;
    event.preventDefault();
    Backbone.history.navigate(url, { trigger: true })
  },

});

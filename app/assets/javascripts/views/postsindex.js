Journal.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],

  initialize: function() {
    this.listenTo(this.collection, "remove", this.render);
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "reset", this.render);
  },

  render: function() {
    var content = this.template;
    this.$el.html(content);
    var that = this;
    this.collection.each(function(post) {
      var view = new Journal.Views.PostsIndexItem({ model: post });
      that.$el.find("ul").append(view.render().$el)
    })
    return this;
  }

});

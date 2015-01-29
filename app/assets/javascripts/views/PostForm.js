Journal.Views.PostForm = Backbone.View.extend({
  template: JST['posts/post_form'],

  events: {
      'submit': 'submit'
  },

  tagName: 'form',

  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function(attributes) {
    if (!attributes) {
      var attributes = {
        title: this.model.get("title"),
        body: this.model.get("body")
      }
    }
    var content = this.template({
      title: attributes.title,
      body: attributes.body
     });
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
    var that = this;
    event.preventDefault();
    var attributes = $(event.currentTarget).serializeJSON();
    this.model.save(attributes, {
      success: function(model) {
        that.collection.add(model, {merge: true })
        Backbone.history.navigate('', {trigger: true});
      },
      error: function (_, response) {
        var attrHash = {
          title: attributes.post.title,
          body: attributes.post.body};
        that.render(attrHash);
        that.$el.prepend(response.responseText)
      }
    });
  },

});

Journal.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],

  events: {
    "click a.back": "renderIndex",
    "dblclick div.attr": "input"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function() {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  renderIndex: function(event) {
    event.preventDefault();
    Backbone.history.navigate('', { trigger: true })
  },

  input: function(event) {
    var $box = $("<input></input>").attr("value",$(event.currentTarget).val())
    $(event.currentTarget).html($box)
  },

});

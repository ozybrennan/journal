window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Journal.Routers.PostRouter({ $rootEl: $('div.content') });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Journal.initialize();
});

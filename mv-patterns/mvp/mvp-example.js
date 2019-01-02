/*
  For difference between MVC and MVP: https://stackoverflow.com/questions/2056/what-are-mvp-and-mvc-and-what-is-the-difference
  MVC = user interacts with Controller. Controller interacts with Model. Usually one Controller to delegate all data flow
  MVP = user interacts with View. View to Presenter, Presenter to Model. Usually 1-1 view-presenter. Each view gets is own presenter
  MVP is easier to test
  Contains user-interface business logic for view
  Passive View (common MVP implementation)

  What is the difference between C and P?
    P observes Models. 
    P updates views when models change
    P binds Models to Views
    C observes Models
    C notifies/ updates Views on Model changes

In MVP, setters sets data. Presenters interacts with Model layers

When to use MVP or MVC?
If there are multiple controllers used, MVP is probably better used. 

Backbone.js is closer to MVP than MVC
*/

var _ = require('lodash');
var Backbone = require('backbone');

var PhotoView = Backbone.View.extend({
 
    //... is a list tag.
    tagName: "li",
 
    // Pass the contents of the photo template through a templating
    // function, cache it for a single photo
    template: _.template( $("#photo-template").html() ),
 
    // The DOM events specific to an item.
    events: {
      "click img": "toggleViewed"
    },
 
    // The PhotoView listens for changes to
    // its model, re-rendering. Since there's
    // a one-to-one correspondence between a
    // **Photo** and a **PhotoView** in this
    // app, we set a direct reference on the model for convenience.
 
    initialize: function() {
      this.model.on( "change", this.render, this );
      this.model.on( "destroy", this.remove, this );
    },
 
    // Re-render the photo entry
    render: function() {
      $( this.el ).html( this.template(this.model.toJSON() ));
      return this;
    },
 
    // Toggle the `"viewed"` state of the model.
    toggleViewed: function() {
      this.model.viewed();
    }
 
});

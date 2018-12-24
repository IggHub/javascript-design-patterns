var MenuItem = MyFrameworkView.extend({
  events: {
    "click .thatThing": "clickedIt"
  },

  clickedIt: function(e){
    e.preventDefault();
  
    MyFramework.trigger("menu:click:" + this.model.get("name"));
  }
});

var MyWorkflow = function(){
  MyFramework.on("menu:click:foo", this.doStuff, this);
};

MyWorkflow.prototype.doStuff = function(){
  // can instantiate other objects
  // sets up event handlers
  // coordinate objects into meaningful flow
}

// MyFrameworkView hooks up a button or something
// This button or something, when clicked,
// triggers "menu:click:SOMETHING
// That something can be anything. In this case, foo.
// assumes this.model.get('name') returns foo
// In actuality, it can trigger anything's name
// MyWorkflow listens to menu:click:foo
// When menu:click:foo happens, it runs doStuff()

// MenuItem is the mediator
// It adds an event
// That will fire dependin on which component is clicked

// MyWorkflow mediates
// which function to run
// when menu:click:foo (not menu:click:bar or menu:click:baz)
// is clicked

/*
  Based on MVC and MVP
  Attempts to separate UI from business logic and behavior in an application
  Uses declarative data bindings

  UI developers and (backend) developers
  UI writes bindings to ViewModel within document markup (HTML)
  (Backend) developers maintain Model and ViewModel for application logic

  Example:
  - KnockoutJS
  - Kendo MVVM
  - Knockback.js
*/

// MODEL
// example with Knockout.js
// looks like when content and done models are modified
// it will notify subscribers

var Todo = function(content, done){
  this.content = ko.observable(content);
  this.done = ko.observable(done);
  this.editing = ko.observable(false);
}

// VIEW
// Usually UI
// Represents state of ViewModel
// Active instead of Passive
// Note: MVC, MVP, MVVM *can* have passive views
// MVVM active View: contains data-bindings, events, and behaviors

// ViewModel
var aViewModel = {
  contactName: ko.observable("John")
}
ko.applyBindings(aViewModel);

// View
/*
  <p><input id="source" data-bind="value: contactName, valueUpdate: 'keyup'" /></p>
  <div data-bind="visible: contactName().length > 10">
      You have a really long name!
  </div>
  <p>Contact name: <strong data-bind="text: contactName"></strong></p>
*/

// Another example
/* 

  <div id="todoapp">
      <header>
          <h1>Todos</h1>
          <input id="new-todo" type="text" data-bind="value: current, valueUpdate: 'afterkeydown', enterKey: add"
                 placeholder="What needs to be done?"/>
      </header>
      <section id="main" data-bind="block: todos().length">
   
          <input id="toggle-all" type="checkbox" data-bind="checked: allCompleted">
          <label for="toggle-all">Mark all as complete</label>
   
          <ul id="todo-list" data-bind="foreach: todos">
   
             <!-- item -->
              <li data-bind="css: { done: done, editing: editing }">
                  <div class="view" data-bind="event: { dblclick: $root.editItem }">
                      <input class="toggle" type="checkbox" data-bind="checked: done">
                      <label data-bind="text: content"></label>
                      <a class="destroy" href="#" data-bind="click: $root.remove"></a>
                  </div>
                  <input class="edit" type="text"
                         data-bind="value: content, valueUpdate: 'afterkeydown', enterKey: $root.stopEditing, selectAndFocus: editing, event: { blur: $root.stopEditing }"/>
              </li>
   
          </ul>
   
      </section>
  </div>
*/

// VIEWMODEL
// Like a specialized Controller
// Changes Model info into View info. Passes commans from View to Model
// Example: user inputs 04/07/2012 5:00 PM. This is what View has. Model receives as 1333832407 and will keep it that way
// ViewModel handles most of ViewModel's logic
// Our View will go to ViewModel for data and actions
// ViewModel provides data and actions for Views
// ViewModel exposes data needed by View from Model
// KnockoutJS' ViewModels = JS objects. No knowledge of HTML markup

// Example

var ViewModel = function ( todos ) { // I'd assume todos = todos Model
        var self = this;
 
    // map array of passed in todos to an observableArray of Todo objects
    self.todos = ko.observableArray( // Looks like this connects to some sort of Todo object containing all Todo items
    ko.utils.arrayMap( todos, function ( todo ) {
        return new Todo( todo.content, todo.done );
    }));
 
    // store the new todo value being entered
    self.current = ko.observable();
 
    // add a new todo, when enter key is pressed
    self.add = function ( data, event ) {
        var newTodo, current = self.current().trim();
        if ( current ) {
            newTodo = new Todo( current );
            self.todos.push( newTodo );
            self.current("");
        }
    };
 
    // remove a single todo
    self.remove = function ( todo ) {
        self.todos.remove( todo );
    };
 
    // remove all completed todos
    self.removeCompleted = function () {
        self.todos.remove(function (todo) {
            return todo.done();
        });
    };
 
    // writeable computed observable to handle marking all complete/incomplete
    self.allCompleted = ko.computed({
 
        // always return true/false based on the done flag of all todos
        read:function () {
            return !self.remainingCount();
        },
 
        // set all todos to the written value (true/false)
        write:function ( newValue ) {
            ko.utils.arrayForEach( self.todos(), function ( todo ) {
                //set even if value is the same, as subscribers are not notified in that case
                todo.done( newValue );
            });
        }
    });
 
    // edit an item
    self.editItem = function( item ) {
        item.editing( true );
    };
//  ...
}

// two-way data binding

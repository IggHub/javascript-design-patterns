var myApp = myApp || {};
myApp.utils = {};
 
(function () {
  var val = 5;
 
  this.getValue = function () {
    return val;
  };
 
  this.setValue = function( newVal ) {
    val = newVal;
  }
 
  // also introduce a new sub-namespace
  this.tools = {};
 
}).apply( myApp.utils );
 
// inject new behaviour into the tools namespace
// which we defined via the utilities module
 
(function () {
    this.diagnose = function() {
      return "diagnosis";
    }
}).apply( myApp.utils.tools );
 
// note, this same approach to extension could be applied
// to a regular IIFE, by just passing in the context as
// an argument and modifying the context rather than just
// "this"
 
// Usage:
 
// Outputs our populated namespace
console.log( myApp );
 
// Outputs: 5
console.log( myApp.utils.getValue() );
 
// Sets the value of `val` and returns it
myApp.utils.setValue( 25 );
console.log( myApp.utils.getValue() );
 
// Testing another level down
console.log( myApp.utils.tools.diagnose() );

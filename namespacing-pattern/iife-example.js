/* 
  Immediately Invoked Function Expression (IIFE)
*/


// named vs anonymous
(function(){/* something here */})();
(function foobar() {/* something foobar related here */})();

//var namespace = namespace || {};
//
//(function(o){
//  o.foo = "foo";
//  o.bar = function(){
//    return "bar";
//  }
//})(namespace);
//
//console.log(namespace);
;(function ( namespace, undefined ) {
 
  // private properties
  var foo = "foo",
      bar = "bar";
 
  // public methods and properties
  namespace.foobar = "foobar";
 
  namespace.say = function ( msg ) {
    speak( msg );
  };
 
  namespace.sayHello = function () {
    namespace.say( "hello world" );
  };
 
  // private method
  function speak(msg) {
    console.log( "You said: " + msg );
  };
 
  // check to evaluate whether "namespace" exists in the
  // global namespace - if not, assign window.namespace an
  // object literal
 
})( namespace = namespace || {} );
 
 
// we can then test our properties and methods as follows
 
// public
 
// Outputs: foobar
console.log( namespace.foobar );
 
// Outputs: You said: hello world
namespace.sayHello();
 
// assigning new properties
namespace.foobar2 = "foobar";
 
// Outputs: foobar
console.log( namespace.foobar2 );

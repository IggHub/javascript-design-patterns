/*
  Prefix Namespacing
  http://peter.michaux.ca/articles/javascript-namespacing

  Select unique prefix namespace (myApplication_)

  Pros:
  Simple to use and instantiate

  Cons:
  Large global objects 
  If prefix is taken, need to change everything
*/

var myApplication_propertyA = {};
var myApplication_propertyB = {};

function myAplication_myMethod(){};

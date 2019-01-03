/* 
  CommonJS = reusable JS, exports specific objects made available to any dependent code
  No function wrappers (unlike AMD)

  - exports
  - require

  var lib = require("package/lib");
  function foo(){
    lib.log("hello world!");
  }

  exports.foo = foo;


  -----

  function foobar(){
    this.foo = function(){console.log("Foo!")};
    this.bar = function(){console.log("Bar!")};
  }

  exports.foobar = foobar;

  *** different file ***

  var foobar = require("./foobar").foobar,
    test = new foobar();

  test.foo(); //=> "Foo!"
*/

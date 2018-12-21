var myModule = (function(){
  var module = {},
    privateVariable = "Hello World";
  
  function privateMethod() {
    console.log("I'm private yo!");
  };

  module.publicProperty = "FooBarPublic";
  module.publicMethod = function(){
    console.log(privateVariable);
    return;
  };

  return module;
})();

console.log(myModule.publicProperty);
console.log(myModule.publicMethod());

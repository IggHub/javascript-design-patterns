var mySingleton = (function(){
  var instance;
  
  function init(){
    function privateMethod(){
      console.log("I am private");
    };
    
    var privateVariable = "I am also private!";
    var privateRandomNumber = Math.random();

    return {
      publicMethod: function(){
        console.log("Public can see me yo!");
      },
      publicProperty: "I am also public yo!",
      getRandomNumber: function(){
        return privateRandomNumber;
      }
    }
  };

  return {
    getInstance: function(){
      if(!instance){
        instance = init();
      }

      return instance;
    }
  }
})();

var myBadSingleton = (function(){
  var instance;

  function init(){
    var privateRandomNumber = Math.random();
    
    return {
      getRandomNumber: function(){
        return privateRandomNumber;
      }
    }
  }
  return {
    getInstance: function(){
    instance = init();
   
    return instance;
    }
  };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();

console.log(singleA.getRandomNumber() === singleB.getRandomNumber());
console.log(singleA.publicMethod());
console.log(singleA.getRandomNumber());


var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log(badSingleA.getRandomNumber() !== badSingleB.getRandomNumber())
var SingletonTester = (function () {
 
  // options: an object containing configuration options for the singleton
  // e.g var options = { name: "test", pointX: 5};
  function Singleton( options ) {
 
    // set options to the options supplied
    // or an empty object if none are provided
    options = options || {};
 
    // set some properties for our singleton
    this.name = "SingletonTester";
 
    this.pointX = options.pointX || 6;
 
    this.pointY = options.pointY || 10;
 
  }
 
  // our instance holder
  var instance;
 
  // an emulation of static variables and methods
  var _static = {
 
    name: "SingletonTester",
 
    // Method for getting an instance. It returns
    // a singleton instance of a singleton object
    getInstance: function( options ) {
      if( instance === undefined ) {
        instance = new Singleton( options );
      }
 
      return instance;
 
    }
  };
 
  return _static;
 
})();
 
var singletonTest = SingletonTester.getInstance({
  pointX: 5
});
 
// Log the output of pointX just to verify it is correct
// Outputs: 5
console.log( singletonTest.pointX );
console.log(singletonTest.name);
console.log(singletonTest.pointX);
console.log(singletonTest.pointY);

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

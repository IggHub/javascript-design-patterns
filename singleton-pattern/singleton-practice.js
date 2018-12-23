// There must be exactly one instance of a class, and it must be accessible to clients from a well-known access point.
// When the sole instance should be extensible by subclassing, and clients should be able to use an extended instance without modifying their code.
// GoF on applicability of Singleton

var iggySingleton = (function(){
  var instance;

  function init(){
    var privateStr = "I am private";

    var randomNum = Math.random();

    return {
//      getRandomNum: randomNum // diff between calling randomNum vs function(){ return randomNum } ?
// They both return the same thing: same randomNum
      getRandomNum: function(){
        return randomNum;
      }
    }
  }

  return {
    getInstance: function(){
      if(!instance){
        instance = init();
      }      
      return instance;
    }
  }
})();

var igSingleton = iggySingleton.getInstance();

console.log(igSingleton.getRandomNum());
console.log(igSingleton.getRandomNum());
console.log(igSingleton.getRandomNum());

var igSingleton2 = iggySingleton.getInstance();
console.log(igSingleton2.getRandomNum());
console.log(igSingleton.getRandomNum() === igSingleton2.getRandomNum());

var testModule = (function(){
  var counter = 0
  return {
    incrementCounter: function(){
      return counter++
    },
    resetCounter: function(){
      console.log("counter value prior to reset: " + counter)
      counter = 0
    }
  }
})()

testModule.incrementCounter()
testModule.resetCounter()

// module pattern template (IIFE)
// var myNameSpace = (function(){
//   var myPrivateVar, myPrivateMethod;
// 
//   myPrivateVar = 0;
// 
//   myPrivateMethod = function(foo) {
//     console.log(foo);
//   };
// 
//   return {
//     myPublicVar: "foo",
//     myPublicFunction: function(bar){
//       myPrivateVar++;
//       myPrivateMetho(bar);
//     }
//   };
// })();

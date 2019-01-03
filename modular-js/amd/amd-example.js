/* 
  AMD = Asynchronous Module Definition
  AMD utilizes define method
  
  define method facilitates module definition

  define(
    module_id,
    [dependencies],
    definition function
  )

  For demo, check out https://www.youtube.com/watch?v=6tgtzygpPc0
*/

define("myModule",
  ["foo", "bar"],
  function(foo, bar){
    var myModule = {
      doStuff: function({console.log("Stuff!")};
    }
  return myModule;
  }
)

define("myModule",
  ["math", "graph"],
  function(math, graph){
    return {
      plot: function(x, y){
        return graph.drawPie(math.randomGrid(x,y));
      }
    }
  }
);

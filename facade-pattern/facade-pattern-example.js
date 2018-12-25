var addMyEvent = function(el, ev, fn){ //el = element, ev = event, fn = function
  if(el.addEventListener){
    el.addEventListener(ev, fn, false); //if addEventListener method is available, then do that
  } else if(el.attachEvent){
   el.attachEvent("on" + ev, fn); // if attachEvent method is available, then do that
  } else {
    el["on" + ev] = fn; //otherwise, attach "on" event to el to do function
  }
};

/* second example involves bindReady(), used by jQuery's $(document).ready(...)

bindReady: function() {
    ...
    if ( document.addEventListener ) {
      // Use the handy event callback
      document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );
 
      // A fallback to window.onload, that will always work
      window.addEventListener( "load", jQuery.ready, false );
 
    // If IE event model is used
    } else if ( document.attachEvent ) {
 
      document.attachEvent( "onreadystatechange", DOMContentLoaded );
 
      // A fallback to window.onload, that will always work
      window.attachEvent( "onload", jQuery.ready );
               ...
*/

// the point of facade pattern is to hide complex implementation supply dev easier execution!
// Goal: to supply easier API
var module = (function() {
 
    var _private = {
        i: 5,
        get: function() {
            console.log( "current value:" + this.i);
        },
        set: function( val ) {
            this.i = val;
        },
        run: function() {
            console.log( "running" );
        },
        jump: function(){
            console.log( "jumping" );
        }
    };
 
    return {
 
        facade: function( args ) {
            _private.set(args.val);
            _private.get();
            if ( args.run ) {
                _private.run();
            }
        }
    };
}());
 
 
// Outputs: "current value: 10" and "running"
module.facade( {run: true, val: 10} );

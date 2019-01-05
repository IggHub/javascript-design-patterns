/*
  Have a single global variable as primary object reference

  Challenge: 
  Need to make sure no one else uses same global variable (myApplication better be free!)
*/

var myApplication = (function(){
  function(){/*...*/};
  return {/* return some object */}
})();

/*
  Object Literal Notation

  Similar to module pattern
  Object with collection of key:value pairs
*/

/* various ways to check whether myApplication already exist as a global object
1   var myApplication = myApplication || {}; // => most popular
2   if(!MyApplication){MyApplication = {}}; // => most popular
3   window.myApplication || (window.myApplication = {}); // can be rewritten without window.
4   var myApplication = $.fn.myApplication = function(){};
5   var myApplication = myApplication === undefined ? {} : myApplication;

Most devs favor steps 1 or 2
*/
var myApplication = {
  
  // adding function
  getInfo: function(){},

  // adding other properties/ functionalities
  models: {},
  views: {
    pages: {}
  },
  collections: {}
}

// extending properties/ functionalities
myApplication.foo = function(){};

myApplication.utils = {
  toString: function(){},
  export: function(){}
}


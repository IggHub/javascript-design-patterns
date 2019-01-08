/* 
  Advanced namespacing patterns
*/

// Suppose we have rather deeply nested namespacing
// var application = {
//   utilities: {
//     drawing: {
//       canvas: {
//         2d: {
//           // ...
//         }
//       }
//     }
//   }
// }

// If we want to add additional layer,
// that object will be a child of some parent in our deep namespace
// Like, maybe we want to add painting layer in addition to drawing:
// application.utilities.painting.something_painting.something_else...

// Better/ clevered solution is to define nested namespace under existing global var

var myApp = myApp || {};

function extend( ns, ns_string ) {
  var parts = ns_string.split("."),
      parent = ns,
      pl;
 
  pl = parts.length;
 
  for ( var i = 0; i < pl; i++ ) {
    // create a property if it doesn't exist
    if ( typeof parent[parts[i]] === "undefined" ) {
      parent[parts[i]] = {};
    }
 
    parent = parent[parts[i]];
  }
  return parent;
} 

var mod = extend(myApp, "modules.module2");

console.log(mod);

console.log(mod == myApp.modules.module2);
extend(myApp, "moduleA.moduleB.moduleC.moduleD");
extend(myApp, "longer.version.looks.like.this");
console.log(JSON.stringify(myApp));

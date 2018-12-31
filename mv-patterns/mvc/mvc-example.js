// example of View
var _ = require('lodash');

var buildPhotoView = function ( photoModel, photoController ) { // has photoModel and photoController
 
  var base = document.createElement( "div" ),
      photoEl = document.createElement( "div" );
 
  base.appendChild(photoEl);
 
  var render = function () {
          // We use a templating library such as Underscore
          // templating which generates the HTML for our
          // photo entry
          photoEl.innerHTML = _.template( "#photoTemplate", {
              src: photoModel.getSrc()
          });
      };
 
  photoModel.addSubscriber( render );
 
  photoEl.addEventListener( "click", function () {
    photoController.handleEvent( "click", photoModel );
  });
 
  var show = function () {
    photoEl.style.display = "";
  };
 
  var hide = function () {
    photoEl.style.display = "none";
  };
 
  return {
    showView: show,
    hideView: hide
  };
 
};

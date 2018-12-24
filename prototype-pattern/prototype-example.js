// Creates objects based on a template of an existing object
// Through cloning

// example1
// var myCar = {
//   name: "Kia Soul",
//   drive: function(){
//     console.log("Put-put, I'm driving manual!");
//     return;
//   },
//   panic: function(){
//     console.log("I have no idea what I'm doing!");
//     return;
//   }
// };
// 
// var iggyManualCar = Object.create(myCar);
// console.log(iggyManualCar.name);
// console.log(iggyManualCar.drive());
// console.log(iggyManualCar.panic());

// example2
// var vehicle = {
//   getModel: function(){
//     console.log("The model of this vehicle is: " + this.model);
//   }
// }
// 
// var car = Object.create(vehicle, {
//   "id": {
//     //value: MY_GLOBAL.nextId(),
//     value: 1,
//     enumerable: true
//   },
// 
//   "model": {
//     value: "Ford",
//     enumerable: true
//   }
// });
// 
// console.log(car.getModel());

// example3
// without Object.create()
var vehiclePrototype = {
 
  init: function ( carModel ) {
    this.model = carModel;
  },
 
  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model);
  }
};
 
 
function vehicle( model ) {
 
  function F() {};
  F.prototype = vehiclePrototype;
 
  var f = new F();
 
  f.init( model );
  return f;
 
}
 
var car = vehicle( "Ford Escort" );
car.getModel();

// unlike constructor pattern, it does not explicitly use constructor (new ...)
// Example: UI Factory to create UI component
// We inform Factory what type of object is required (a "Button", a "Panel")
// Factory will instantiate it
// Useful when object creation is a complex (strongly depends on dynamic factors/ app config)
// For example, we also use Types.js

var VehicleTypes = require('./Types')

// Vehicle Factory skeleton
function VehicleFactory(){}

// sets up default vehicleClass to be Car
VehicleFactory.prototype.vehicleClass = VehicleTypes.Car;

/*
  1. Get all vehicle types inside VehicleTypes
  2. Sets up Factory that can create new Vehicle instance: VehicleFactory.createVehicle
  3. This Factory returns that Vehile class given the proper options
*/

VehicleFactory.prototype.createVehicle = function(options){
  switch(options.vehicleType){
    case "car":
      this.vehicleClass = VehicleTypes.Car;
      break;
    case "truck":
      this.vehicleClass = VehicleTypes.Truck;
      break;
  }
  // once we do whateverFactory.createVehicle(options), 
  // it returns that class (Car/ Truck)
  return new this.vehicleClass(options);
}

// Looks like we are creating a new factory using VehicleFactory!
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
    vehicleType: "car",
    color: "green",
    doors: 4
  })


console.log(car instanceof VehicleTypes.Car);
console.log(car);

var truckFactory = new VehicleFactory();
var myTruck = truckFactory.createVehicle({
  vehicleType: "truck",
  color: "black",
  doors: 2
});

console.log(myTruck instanceof VehicleTypes.Truck);
console.log(myTruck)

/* example of abstractVehicleFactory */

var abstractVehicleFactory = (function () {
 
  // Storage for our vehicle types
  var types = {};
 
  return {
      getVehicle: function ( type, customizations ) {
          var Vehicle = types[type];
 
          return (Vehicle ? new Vehicle(customizations) : null);
      },
 
      registerVehicle: function ( type, Vehicle ) {
          var proto = Vehicle.prototype;
 
          // only register classes that fulfill the vehicle contract
          if ( proto.drive && proto.breakDown ) {
              types[type] = Vehicle;
          }
 
          return abstractVehicleFactory;
      }
  };
})();
 
 
// Usage:
 
abstractVehicleFactory.registerVehicle( "car", VehicleTypes.Car );
abstractVehicleFactory.registerVehicle( "truck", VehicleTypes.Truck );
 
// Instantiate a new car based on the abstract vehicle type
var car = abstractVehicleFactory.getVehicle( "car", {
            color: "lime green",
            state: "like new" } );
 
// Instantiate a new truck in a similar manner
var truck = abstractVehicleFactory.getVehicle( "truck", {
            wheelSize: "medium",
            color: "neon yellow" } );

console.log(truck);

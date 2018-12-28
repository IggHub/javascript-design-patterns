// Decorator Pattern
// code re-use
// similar to Mixins
// add behavior to existing classes in system dynamically

function Vehicle(vehicleType){
  this.vehicleType = vehicleType || "car";
  this.model = "default";
  this.license = "00000-000";
}

var testInstance = new Vehicle("car");
console.log(testInstance);

var truck = new Vehicle("truck");

truck.setModel = function(modelName){
  this.model = modelName;
};

truck.setColor = function(color){
  this.color = color;
};

truck.setModel("CAT");
truck.setColor("blue");

console.log(truck);

truck.setColor("red");

console.log(truck);

/* 2nd example */
/* Inspired by Head First Design Patterns */

// constructor example
// constructor is instantiated with new Macbook()
function MacBook(){
  this.cost = function(){return 997;}
  this.screenSize = function(){return 11.6};
};

// decorator 1
// decorates macbook constructor
function memory(macbook){
  var v = macbook.cost();
  macbook.cost = function(){
    return v + 75;
  };
};

// decorator 2
// decorates macbook constructor further
function engraving(macbook){
  var v = macbook.cost();
  macbook.cost = function(){
    return v + 200;
  }
};

// decorator 3
function insurance(macbook){
  var v = macbook.cost();
  macbook.cost = function(){
    return v + 250;
  }
};

// decorator 4
function changeScreenSize(macbook){
//  macbook.screenSize = function(){
//    return 13.3;
//  }
  macbook.screenSize = 15.1;
}
// instantiate new mb
var mb = new MacBook();

console.log(mb);

// applies memory, engraving, and insurance to MacBook instance (mb)
memory(mb);
engraving(mb);
insurance(mb);
changeScreenSize(mb);

// note mb's screenSize was a function, now it is a float
// unless we keep macbook.screenSize = function(){/**/} original function
console.log(mb);
console.log(mb.cost());
console.log(mb.screenSize);

// MacBook() super-class objects are being overridden (its cost is higher)

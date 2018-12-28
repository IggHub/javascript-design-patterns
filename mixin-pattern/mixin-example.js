// Mixins
// Sub-classing example

var _ = require('lodash');

// Person is base object
var Person = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = "male";
};

// new class that's a subclass of existing Person object
// Superhero class
// Superhero class inherits properties of Person superclass
// Person is superclass
// Superhero is subclass

var clark = new Person("Clark", "Kent");

var Superhero = function(firstName, lastName, powers){
  // .call() is used to invoke constructor
  Person.call(this, firstName, lastName);

  this.powers = powers;
};

Superhero.prototype = Object.create(Person.prototype);
var superman = new Superhero("Clark", "Kent", ["flight", "heat-vision"])

console.log(superman);

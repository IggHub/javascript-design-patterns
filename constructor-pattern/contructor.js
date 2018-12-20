function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.introduceMe = function(){
  return `The name is ${this.firstName} ${this.lastName}`
}

const John = new Person(`John`, `Smith`)
const Abby = new Person(`Abby`, `Smith`)

console.log(John.introduceMe())
console.log(Abby.introduceMe())

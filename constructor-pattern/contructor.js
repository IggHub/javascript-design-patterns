function Chocolate(type, percent) {
  this.type = type
  this.percent = percent
}

Chocolate.prototype.chocolatey = function() {
  return (
    "I am a " + this.percent + "% " + this.type + " chocolate"
  )
}

const darkChocolate = new Chocolate("dark", 95)
console.log(darkChocolate.chocolatey())

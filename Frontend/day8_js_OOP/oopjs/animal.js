function Animal(name) {
  this.name = name
this.run = function() {
    alert("running "+this.name)
  }
}

var animal = new Animal('Foxie')
animal.run()



function Rabbit(name) {

  Animal.apply(this, arguments) // inherit

  this.bounce = function() {
    alert("bouncing "+this.name)
  }
}

rabbit = new Rabbit("Rab")

rabbit.bounce() // own method

rabbit.run()    // inherited method

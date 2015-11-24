function Rabbit(name) {

  Animal.apply(this, arguments) // inherit

  this.bounce = function() {
    alert("bouncing "+this.name)
  }
}

rabbit = new Rabbit("Rab")

rabbit.bounce() // own method

rabbit.run()    // inherited method

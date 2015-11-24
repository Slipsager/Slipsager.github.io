/* Creating and using custom objects in javascript */


alert("Look at the console for output");


//  literal notation  = JSON (javascript object notation)

var snoopy = {
    species: "beagle",
    age: 10

};

console.log("snoopy.age = " + snoopy.age);

//  constructor notation
var buddy = new Object();
buddy.species = "golden retriever";
buddy.age = 5;


console.log("buddy.species = " + buddy.species);


//Constructor function with parameter, properties and methods
function Rectangle(height, width) {
    //properties
    this.height = height;
    this.width = width;
    //public methods
    this.calcArea = function() {
        return this.height * this.width;
    };

    this.calcPerimeter = function() {
        return 2 * this.height + 2 * this.width;
    }

}

//test program : make new object (instance) and use it
var rex = new Rectangle(7, 3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();


console.log("area = " + area + " omkreds= " + perimeter);

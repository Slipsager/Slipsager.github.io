/* Creating and using custom objects in javascript */

//Constructor function with parameter, properties and methods
function Account(accountType, owner) {
  //properties
  this.saldo = 0;
  this.accountType = accountType;
  this.owner = owner;
  this.rent = 3.2; // p.a.
  this.transaction = []; //array

  //methods
  this.insert = function(amount) {
      this.saldo = this.saldo + amount;
      this.transaction[this.transaction.length] = amount;
      alert("You inserted : "+ amount);

  };

  this.withdraw = function(amount) {
      this.saldo = this.saldo - amount;
      this.transaction[this.transaction.length] = -amount;
      alert("You withdraw : "+ amount);
  };
  this.setrent = function(rent) {
  	this.rent = rent;
  	// body...
  }
  this.getSaldo = function(){
  	console.log("Saldo  = " + this.saldo);
  }

  this.getTransactions = function(){
  	console.log("Transactions on " + this.owner + "s" + this.accountType);
    document.write("Transactions on " + this.owner + "s" + this.accountType);

  	for (var i = 0; i<this.transaction.length; i++) {
  		console.log(": " + this.transaction[i]);
      document.write(": " + this.transaction[i]);
  	};
  }
}

// exercise 2 sub class  , SavingsAccount is a specialization of Account
function SavingsAccount (name){
  Account.apply(this, arguments)
  //Properties


  this.specialRent = 10;


  this.owner = name;


  // methodes

  this.savingsAccount = function(){
    console.log("Hello "+this.owner+". This is your savingsaccount.");
  }

  this.getSavingsInfo = function(){
    console.log("The special rent to this account is: "+this.specialRent+"%");
  }

}




//test for Exercise 1: make new object (instance) and use it according to a testscenario

alert("Test of Account.js   Look at the console for output");

var hansJ = new Account("Sallery account", "Hans Jensen");
hansJ.insert(100);
hansJ.getSaldo();
hansJ.insert(150);
hansJ.withdraw(50);
hansJ.getSaldo();
hansJ.getTransactions();



//Exercise 2 test
var Thomas = new SavingsAccount("Thomas Larsen");

  Thomas.savingsAccount(); // own method
  Thomas.getSavingsInfo(); // own method

  Thomas.insert(400); // inherited method
  Thomas.withdraw(150); // inherited method
  Thomas.getSaldo(); // inherited method
  Thomas.getTransactions(); // inherited method



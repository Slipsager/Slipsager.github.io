/* Creating and using custom objects in javascript */

//Constructor function with parameter, properties and methods
function Account(accountType, owner) {
  //properties
  this.saldo = 0;
  this.accountType = accountType;
  this.owner = owner;
  this.rent = 3.2; // p.a.
  this.transaction = [];

  //methods
  this.insert = function(amount) {
      //this.saldo = this.saldo + amount;
      //this.transaction[this.transaction.length] = amount;
      alert(amount);

  };

  this.withdraw = function(amount) {
      this.saldo = this.saldo - amount;
      this.transaction[this.transaction.length] = -amount;
  };
  this.setrent = function(rent) {
  	this.rent = rent;
  	// body...
  }
  this.getSaldo = function(){
  	console.log("Saldo  = " + this.saldo);
  }

  this.getTransactions = function(){
  	console.log("Transaktioner på " + this.owner + "s" + this.accountType);

  	for (var i = 0; i<this.transaction.length; i++) {
  		console.log(": " + this.transaction[i]);
  	};
  }
}


/*
// subclass to the Account class
function SavingsAccount(name){

  Account.apply(this); // inherit
  this.getSavingsInfo(){
    console.log("Savings on your SavingsAccount = "+ saldo);
  }

}
*/


//test : make new object (instance) and use it according to a testscenario
alert("Test of Account.js   Look at the console for output");

var hansJ = new Account("Lønkonto", "Hans Jensen");
hansJ.insert(100);
hansJ.getSaldo();
hansJ.insert(150);
hansJ.withdraw(50);
hansJ.getSaldo();
hansJ.getTransactions();


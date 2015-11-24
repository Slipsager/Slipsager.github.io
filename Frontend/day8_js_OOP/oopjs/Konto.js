/* Creating and using custom objects in javascript */




//Constructor function with parameter, properties and methods
function Konto(kontoType, ejer) {
  //properties
  this.saldo = 0;
  this.kontoType = kontoType;
  this.ejer = ejer;
  this.rente = 3.2; // p.a.
  this.transaction = [0];

  //methods
  this.indbetal = function(beloeb) {
      this.saldo = this.saldo + beloeb;
      this.transaction[this.transaction.length] = beloeb;

  };

  this.haev = function(beloeb) {
      this.saldo = this.saldo - beloeb;
      this.transaction[this.transaction.length] = -beloeb;
  };
  this.setRente = function(rente) {
  	this.rente = rente;
  	// body...
  }
  this.getSaldo = function(){
  	console.log("Saldo på konto = " + this.saldo);
  }

  this.getTransactions = function(){
  	console.log("Transaktioner på " + this.ejer + "s" + this.kontoType);
  	for (var i = 0; i<this.transaction.length; i++) {
  		console.log(": " + this.transaction[i]);  		
  	};
  }


}

//test : make new object (instance) and use it according to a testscenario
alert("Test of Konto.js   Look at the console for output");

var konto1 = new Konto("Lønkonto", "Hans Jensen");
konto1.indbetal(100);
konto1.getSaldo();
konto1.indbetal(150);
konto1.haev(50);
konto1.getSaldo();
konto1.getTransactions();


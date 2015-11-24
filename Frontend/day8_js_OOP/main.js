//var Konto(saldo, kontoType, ejer, transaktion, rente) = {};

function Konto(saldo, kontoType, ejer) {

	this.saldo = saldo;
	this.kontoType = kontoType;
	this.ejer = ejer;
	var transaktion = [];

	this.indbetal = function(beloeb) {
		this.saldo = this.saldo + beloeb;
		transaktion.push(beloeb);
		console.log("Saldo: "+this.saldo); //test
		return this.saldo;
	}

	this.haev = function(beloeb) {
		this.saldo = this.saldo - beloeb;
		transaktion.push(-beloeb);
		console.log("Saldo: "+this.saldo); //test
		return this.saldo;
	}

	this.setRente = function() {

	}

	this.getOversigt = function() {

	}

	this.getSaldo = function() {

	}

	this.getTransaction = function() {
		console.log(transaktion); //test
		return transaktion;
	}

};



//TEST
var konto1 = new Konto(0, 'lønkonto', 'Hans Jensen');

konto1.indbetal(100);
konto1.getSaldo(); //saldo er 100kr
konto1.indbetal(150);
konto1.haev(50);
konto1.getSaldo(); //saldo er 200kr
konto1.getTransaction();
//Konto info: lønkonto, Hans Jensen
//Transaktioner: 100, 150, -50
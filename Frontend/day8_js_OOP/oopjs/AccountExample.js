function Account (felhasz,tulaj)
  {
    this.accountType=felhasz;
    this.owner=tulaj;
    this.saldo=0;

  this.insert = function(fizu)
  {
    this.transaction[transaction.length]=fizu;
    this.saldo+=fizu;
  }
  this.withdraw = function (felvet)
  {
    this.transaction[transaction.length]=-felvet;
    this.saldo-=felvet;
  }
  this.setRent = function (lakber)
  {
    this.rent=lakber;
  }
  this.getSaldo = function()
  {
    document.write(saldo);
  }
  this.getTransactions = function()
  {
    for (int i = 0; i < transaction.length; i++)
      document.write(transaction[i]);
    document.write();
  }
}
var HansJ = new Account("kasfnioasn,Hans Jensen");

HansJ.insert(100);
HansJ.getSaldo();
HansJ.insert(150);
HansJ.withdraw(50);
HansJ.getSaldo();
HansJ.getTransactions();

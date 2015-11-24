/* Controller for a Angular app  */

//Constructor function with parameter, properties and methods
function AccountController($scope) {
  //properties
      $scope.saldo = 0;
      $scope.accountType = "Saving Account";
      $scope.owner = "Bjarne";
      $scope.rent = 3.2; // p.a.
      $scope.transaction = [0];
      $scope.message = "";

  //methods
  $scope.insert = function(amount) {
      $scope.saldo = $scope.saldo + amount;
      $scope.transaction.push(amount);
      $scope.message +=  " Insert: "+amount;

  };

  $scope.withdraw = function(amount) {
      $scope.saldo = $scope.saldo - amount;
      $scope.transaction[$scope.transaction.length] = -amount;
      $scope.message +=  " Withdraw: "+amount;
  };
  $scope.setrent = function(rent) {
  	$scope.rent = rent;
  	// body...
  }
  $scope.getSaldo = function(){
  	$scope.message +=  " Saldo = "+$scope.saldo;
  }

  $scope.getTransactions = function(){
  	$scope.message +=  " Transactions on " + $scope.owner + "s " + $scope.accountType;

  	for (var i = 0; i<$scope.transaction.length; i++) {
  		$scope.message += ": " + $scope.transaction[i];
  	};
  }


}



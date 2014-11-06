/* Controller for a Angular app  */

//Constructor function with parameter, properties and methods
function AccountController($scope) {
  //properties
      $scope.saldo = 0;
      $scope.accountType = "Saving Account";
      $scope.owner = "Bjarne";
      $scope.rent = 3.2; // p.a.
      $scope.transaction = [0];
      $scope.message = [0];
      $scope.output = "";

  //methods
  $scope.insert = function(amount) {
      $scope.saldo = $scope.saldo + amount;
      $scope.transaction.push(amount);
      $scope.message.push(" Insert: "+amount);

  };

  $scope.withdraw = function(amount) {
      $scope.saldo = $scope.saldo - amount;
      $scope.transaction[$scope.transaction.length] = -amount;
      $scope.message.push(" Withdraw: "+amount);
  };
  $scope.setrent = function(rent) {
  	$scope.rent = rent;
  	// body...
  }
  $scope.getSaldo = function(){
  	$scope.message.push(" Saldo = "+$scope.saldo);
  }

  $scope.getTransactions = function(){
  	$scope.message.push(" Transactions on " + $scope.owner + "s " + $scope.accountType);

  	for (var i = 0; i<$scope.transaction.length; i++) {
  		$scope.message.push(": " + $scope.transaction[i]);
  	};
  }


}



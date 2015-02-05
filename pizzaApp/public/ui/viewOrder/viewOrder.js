angular.module('pizzApp').controller('VieworderCtrl',function($scope,services){
	services.getOrders(function(orders){
		$scope.orders = orders;
	});
	services.getLogStatus(function(status){
		$scope.logStatus = status;
	});
	console.log($scope.logStatus);
	if($scope.logStatus === 0){	
		$scope.logout = "";
		$scope.login = "Login";
		console.log($scope.logStatus);
	}else{
		$scope.logout = "Log out";
		$scope.login = "";
	}
	$scope.show = "false";
	$scope.viewOrder = function(order){
		$scope.show = "true";
		$scope.pizzas = order.items;
	};

});
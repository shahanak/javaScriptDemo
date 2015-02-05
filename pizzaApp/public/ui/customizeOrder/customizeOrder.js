angular.module('pizzApp').controller('CustomizeorderCtrl',function($scope,services,$location,$filter){
	services.getCart(function(cart){
		$scope.cart = cart;
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
	$scope.hide=false;	
	services.getUserData(function(userdata){
	$scope.user = userdata;
	});
	services.getPizzaOrder(function(pizzaData){
		$scope.pizza= pizzaData;
		$scope.pizza.quantity = 1;
		console.log($scope.pizza);
	});
	$scope.confirm = function(){
		$scope.hide=true;

	};
	$scope.checkout = function(){
		$scope.order = {};
		$scope.order.user = $scope.user;
		$scope.order.items = [$scope.pizza];
		$scope.order.status = "Not Delivered";
		$scope.order.amount = $scope.pizza.quantity * $scope.pizza.price;
		$scope.order.date =  $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss Z');
		console.log($scope.order);
		services.checkout($scope.order,function(data){
			console.log(data);
		});		
		$location.path('/checkout');
	};


});
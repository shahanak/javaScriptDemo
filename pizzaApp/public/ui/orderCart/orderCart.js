angular.module('pizzApp').controller('OrdercartCtrl',function($scope,services,$filter,$location){
	services.getCart(function(cart){
			$scope.cart = cart;
		});
		services.getCartItems(function(cartData){
			$scope.pizzas = cartData;
			console.log($scope.pizzas);					
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
		$scope.order = {};
		$scope.hide=false;	
		$scope.single=false;
		services.getUserData(function(userdata){
			$scope.user = userdata;
		});
		$scope.order.amount = 0;
		$scope.confirm = function(){		
			for(var i = 0;i<$scope.pizzas.length; i++){

					$scope.order.amount = $scope.order.amount +($scope.pizzas[i].quantity * $scope.pizzas[i].price);
			}
			$scope.hide=true;
			$scope.single=true;
		};
		$scope.checkoutCart = function(){		
		$scope.order.user = $scope.user;
		$scope.order.items = $scope.pizzas;	
		$scope.order.status = "Not Delivered";
		$scope.order.date =  $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss Z');
		console.log($scope.order);
		services.checkout($scope.order,function(data){
			console.log(data);
		});		
		$location.path('/checkout');
	};

});
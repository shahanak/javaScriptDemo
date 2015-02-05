angular.module('pizzApp').controller('MenudisplayCtrl',function($scope,services,$location){
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
	services.getItems(function(data){
		$scope.pizzas = data;
		console.log($scope.pizzas);
		 });
	$scope.orderNow = function(pizza){
		console.log(pizza);
		services.setPizzaOrder(pizza);	
		$location.path('/userDetails');
	};
	$scope.addToCart = function(pizza){
		console.log(pizza);
		pizza.quantity = 1;
		services.setCart();
		services.getCart(function(cart){
		$scope.cart = cart;		
		});

		services.addToCart(pizza);
	};
	$scope.viewCart = function(){
		services.getCartItems(function(cartData){
			$scope.cartData = cartData;			
		});
		$location.path('/viewcart');
	};
});
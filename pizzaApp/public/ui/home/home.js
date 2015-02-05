angular.module('pizzApp').controller('HomeCtrl',function($scope,services,$location){
	services.getCart(function(cart){
				$scope.cart = cart;			
			});
	$scope.viewCart = function(){
		services.getCartItems(function(cartData){
			$scope.cartData = cartData;			
		});
		$location.path('/viewcart');
	};
	
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

});
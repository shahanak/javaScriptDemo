angular.module('pizzApp').controller('UserdetailsCtrl',function($scope,services,$location){
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
	$scope.proceed = function(user){
		services.setUserData(user);
		$location.path('/customize');
	};
	$scope.viewCart = function(){
		services.viewCart(function(cartData){
			$scope.cartData = cartData;			
		});
		$location.path('/viewcart');
	};
});
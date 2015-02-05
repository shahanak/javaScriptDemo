angular.module('pizzApp').controller('SignupCtrl',function($scope,services,$location){
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
	$scope.register = function(user){
		console.log($scope.user);
		services.register($scope.user,function(data){
			$scope.data=data;
			console.log($scope.data);			
		});
		$location.path("/login");
	};

});
angular.module('pizzApp').controller('ViewcartCtrl',function($scope,services,$location){
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
			$scope.show=$scope.cart;
			services.getCartItems(function(cartData){
				$scope.cartData = cartData;			
			});
			$scope.checkout=function(){
				services.getLogStatus(function(status){
				$scope.logStatus = status;
				});
				if($scope.logStatus === 0){
					$location.path('/login');
				}else{
					$location.path('/orderCart');				
				}
				

			};
});
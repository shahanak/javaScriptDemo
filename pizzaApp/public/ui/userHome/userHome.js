angular.module('pizzApp').controller('UserhomeCtrl',function($scope,services,$location){
	$scope.viewCart = function(){
		services.getCartItems(function(cartData){
			$scope.cartData = cartData;			
		});
		$location.path('/viewcart');
	};
	services.getCart(function(cart){
			$scope.cart = cart;
		});
});
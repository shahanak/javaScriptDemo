angular.module('pizzApp').controller('LogoutCtrl',function($scope,services,$location){
	services.logout();
	services.getLogStatus(function(status){
		$scope.logStatus = status;
	});
	console.log($scope.logStatus);
	$location.path('/');
});
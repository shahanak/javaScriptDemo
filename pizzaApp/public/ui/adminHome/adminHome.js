angular.module('pizzApp').controller('AdminhomeCtrl',function($scope,services){
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
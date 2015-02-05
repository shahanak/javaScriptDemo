angular.module('ui').controller('ShowempCtrl',function($scope,getEmp){

getEmp.getData(function(data){

	$scope.empData = data;
});
	

});
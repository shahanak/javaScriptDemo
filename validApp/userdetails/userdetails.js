angular.module('validApp').controller('UserdetailsCtrl',function($scope,setget){
setget.get(function(data){
	$scope.userdata = data;
});

});
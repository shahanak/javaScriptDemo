angular.module('myGitApp').controller('ListstarredCtrl',function($scope,searchservice){
	searchservice.listStarred(function(data){
		$scope.listStar = data;
		console.log($scope.listStar);
	});

});
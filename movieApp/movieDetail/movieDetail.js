angular.module('movieApp').controller('MoviedetailCtrl',function($scope,$routeParams,service){
	service.list(function(movies){
	    $scope.movies = movies;    
	    $scope.url = $scope.movies[$routeParams.movieDetail-1].url;    
	    service.find($scope.url,function(movies){$scope.movieData = movies;});
    });
});
angular.module('gitApp').controller('SearchCtrl',function($scope,gitHub){
	$scope.executeSearch = function executeSearch() {
	    gitHub.searchRepos($scope.query, function (error, data) {
	        if (!error) {
	            $scope.repos = data.items;
	        }
	    });
	};
	$scope.openRepo = function openRepo(name) {
    gitHub.getRepo(name, function (error, data) {
        if (!error) {
            $scope.activeRepo = data;
 
            
                gitHub.getUserRepos(name, function(error, data) {
                if(!error) {
                  $scope.repos = data;
                } else {
                  $scope.repos.description = 'No repo found!';
                }
                });
            
           
        }
    });
};


});
angular.module('myGitApp').controller('SearchCtrl',function($scope,searchservice,$http){
	$scope.executeSearch = function executeSearch() {
	 searchservice.authentication(function(data){
		$scope.userDetails = data;	
		searchservice.searchRepos($scope.query, function (error, data) {
	        if (!error) {
	            $scope.repos = data.items;	              
	     
           $scope.repos.forEach(function(repo){
           console.log(repo.full_name); 
           repo.star = "Star" ;
           repo.watch = "Watch";
             searchservice.checkstar(repo.full_name,function (data,status,error) {
                                   $scope.status = status; 
                                   console.log($scope.status);                                                                 
                                    if($scope.status === 204) {
                                           repo.star = "Unstar";                                           
                                      }
                               
                          });
             searchservice.checkwatch(repo.full_name,function (data,status,error) {
                                   $scope.status = status; 
                                   console.log($scope.status);                                                                 
                                    if($scope.status === 204) {
                                           repo.watch = "Unwatch";                                           
                                      }
                               
                          });
                  });

	      }

	    });	   
		
	});


	};
		$scope.starfun = function starfun(repo){
			if(repo.star === "Star"){
		searchservice.starfun(repo.full_name,function(status){
			console.log(status);
			repo.star = "Unstar" ;
		});
	}else{
		searchservice.unstarfun(repo.full_name,function(status){
			console.log(status);
			repo.star = "Star" ;
		
		});
	}
};
 $scope.watchfun = function watchfun(repo){
			if(repo.watch === "Watch"){
		searchservice.watchfun(repo.full_name,function(status){
			console.log(status);
			repo.star = "Unwatch" ;
		});
	}else{
		searchservice.unwatchfun(repo.full_name,function(status){
			console.log(status);
			repo.watch = "Watch" ;
		
		});
	}
};
	

		
});
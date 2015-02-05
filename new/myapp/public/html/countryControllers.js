var countryControllers = angular.module('countryControllers', []);
countryControllers.controller('CountryListCtrl' , function($scope , service){
 	service.list(function(data){
 		$scope.countries = data;
 	});
 });
countryControllers.controller('CountryDetailCtrl' , function($scope ,$routeParams, service){
 	service.find($routeParams.countryName,function(data){
 		$scope.countryData = data;
 	});
 });

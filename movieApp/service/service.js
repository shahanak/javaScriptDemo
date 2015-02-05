angular.module('movieApp').factory('service',function($http) {

	var service = {
		list: function (callback){
            $http({
              method: 'GET',
              url: '/movies.json',
              cache: true
            }).success(callback);
          },
    find: function(url,callback){
            $http({
              method: 'GET',
              url:''+url+'',
              cache: true
            }).success(callback);        
          }
	};
	 
	return service;
});
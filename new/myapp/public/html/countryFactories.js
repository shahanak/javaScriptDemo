
 angular.module('countriesFactory', []).factory('service' , function($http){		
 	return {
      list: function (callback){
        $http({
          method: 'GET',
          url: '../database/countryId.json',
          cache: true
        }).success(callback);
      },
      find: function(id, callback){
        $http({
              method: 'GET',
              url: '../database/country_' + id + '.json',
              cache: true
        }).success(callback);
      }
    };
});
angular.module('movieApp').controller('HomeCtrl',function($scope, service){

 service.list(function(movies){
          $scope.movies = movies;  

        });

});
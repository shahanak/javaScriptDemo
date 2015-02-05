angular.module('countryDirective', [])
       .directive('country', function(){
  return {
    scope: { country: '=' },
    restrict: 'A',
    templateUrl: 'country.html',
    controller: function($scope, service){
      service.find($scope.country.id, function(country) {
        $scope.flagURL = country.flagURL;
      });
    }
  };
});
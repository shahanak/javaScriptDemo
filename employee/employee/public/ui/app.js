angular.module('ui', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('ui').config(function($routeProvider) {
   
    $routeProvider.when('/showEmp',{templateUrl: 'showEmp/showEmp.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/showEmp'});

});

angular.module('ui').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

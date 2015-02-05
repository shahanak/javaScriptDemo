angular.module('validApp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('validApp').config(function($routeProvider) {

    $routeProvider.when('/form',{templateUrl: 'form/form.html'});
    $routeProvider.when('/userdetails',{templateUrl: 'userdetails/userdetails.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/form'});

});

angular.module('validApp').run(function($rootScope) {

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

angular.module('movieApp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('movieApp').config(function($routeProvider) {

    $routeProvider.when('/home',{templateUrl: 'home/home.html'});
    $routeProvider.when('/:movieDetail',{templateUrl: 'movieDetail/movieDetail.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('movieApp').run(function($rootScope) {

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

angular.module('myGitApp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('myGitApp').config(function($routeProvider) {

    $routeProvider.when('/search',{templateUrl: 'search/search.html'});
    $routeProvider.when('/listStarred',{templateUrl: 'listStarred/listStarred.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/search'});

});

angular.module('myGitApp').run(function($rootScope) {

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

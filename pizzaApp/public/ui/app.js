angular.module('pizzApp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('pizzApp').config(function($routeProvider) {

    $routeProvider.when('/home',{templateUrl: 'home/home.html'});
    $routeProvider.when('/signup',{templateUrl: 'signup/signup.html'});
    $routeProvider.when('/login',{templateUrl: 'login/login.html'});
    $routeProvider.when('/userHome',{templateUrl: 'userHome/userHome.html'});
    $routeProvider.when('/admin_addMenu',{templateUrl: 'admin_addMenu/admin_addMenu.html'});
    $routeProvider.when('/menuDisplay',{templateUrl: 'menuDisplay/menuDisplay.html'});
    $routeProvider.when('/userDetails',{templateUrl: 'userDetails/userDetails.html'});
    $routeProvider.when('/customize',{templateUrl: 'customizeOrder/customizeOrder.html'});
    $routeProvider.when('/checkout',{templateUrl: 'checkout/checkout.html'});
    $routeProvider.when('/viewcart',{templateUrl: 'viewcart/viewcart.html'});
    $routeProvider.when('/customoizeCart',{templateUrl: 'customizeCart/customizeCart.html'});
    $routeProvider.when('/orderCart',{templateUrl: 'orderCart/orderCart.html'});
    $routeProvider.when('/viewOrder',{templateUrl: 'viewOrder/viewOrder.html'});
    $routeProvider.when('/adminHome',{templateUrl: 'adminHome/adminHome.html'});
    $routeProvider.when('/logout',{templateUrl: 'logout/logout.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('pizzApp').run(function($rootScope) {

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

angular.module('reviewsApp', ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage', 'ReviewDirective']);

angular.module('reviewsApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/s1project/accounts/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    })
    .when('/s1project/accounts/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    })
    .when('/s1project/accounts/logout', {
        templateUrl: 'templates/logout.html',
        controller: 'LogoutController'
    })
    .when('/s1project/review', {
        templateUrl: 'templates/review.html',
        controller: 'ReviewController'
    })
    .when('/s1project/pleaseregister', {
        templateUrl: 'templates/please-register.html',
    })
     .when('/s1project/aboutus', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
    });
    
});

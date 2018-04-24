angular.module('GSApp', ['ngRoute', 'RouteControllers']);
 
angular.module('GSApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
    })
    .when('/games', {
        templateUrl: 'templates/games.html',
        controller: 'GamestController'
    })
    .when('/blog', {
        templateUrl: 'templates/blog.html',
        controller: 'BlogController'
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactController'
    });
});
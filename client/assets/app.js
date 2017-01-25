var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'static/partials/main.html',
        controller: 'mainController'
    })
    .when('/new', {
            templateUrl: 'static/partials/newUser.html',
            controller: 'newUserController'
        })
    .when('/bids', {
        templateUrl: 'static/partials/bids.html',
        controller: 'bidController'
    })
    .when('/results', {
        templateUrl: 'static/partials/results.html',
        controller: 'resultsController'
    })
    .when('/logout', {
        templateUrl: 'static/partials/main.html',
        controller: 'logoutController'
    })
})

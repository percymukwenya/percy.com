var percyApp = angular.module('percyApp', ['ngRoute']);

percyApp.config(function($routeProvider){
    $routeProvider
        
    // route for the home page
    .when('/', {
        templateUrl : 'templates/home.html',
        controller  : 'mainController'
    })


    .when('/services', {
         templateUrl: 'templates/services.html',
         controller: 'contactController'
    })

    .when('/portfolio', {
        templateUrl: 'templates/portfolio.html',
        controller: 'contactController'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl : 'templates/contact.html',
        controller  : 'contactController'
    });

    
});

// create the controller and inject Angular's $scope
percyApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

percyApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

percyApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
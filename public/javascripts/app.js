var app = angular.module('projectApp',['ngRoute']);

app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider) {
  $routeProvider
    .when('/',{
      templateUrl: 'partials/projects.html'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html'
    })
    .when('/resume', {
      templateUrl: 'partials/resume.html'
    })
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode(true);
}]);

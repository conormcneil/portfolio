var app = angular.module('projectApp',['ui.router']);

app.config(["$stateProvider","$locationProvider",function($stateProvider,$locationProvider) {
  $stateProvider
    .state('portfolio',{
      url: '/',
      templateUrl: 'partials/projects.html'
    })
    // .when('/contact', {
    //   templateUrl: 'partials/contact.html'
    // })
    .state('resume', {
      url: '/resume',
      templateUrl: 'partials/resume.html'
    })
    // .otherwise({
    //   redirectTo: '/'
    // });
  $locationProvider.html5Mode(true);
}]);

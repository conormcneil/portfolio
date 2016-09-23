var app = angular.module('projectApp',['ui.router']);

app.config(["$stateProvider","$locationProvider","$urlRouterProvider",function($stateProvider,$locationProvider,$urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('portfolio',{
      url: '/',
      templateUrl: 'partials/projects.html'
    })
    .state('resume', {
      url: '/resume',
      templateUrl: 'partials/resume.html'
    })
  $locationProvider.html5Mode(true);
}]);

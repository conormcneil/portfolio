var app = angular.module('projectApp',['ui.router','ngAnimate']);

app.config(["$stateProvider","$locationProvider","$urlRouterProvider",function($stateProvider,$locationProvider,$urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('project',{
      url: '/project',
      templateUrl: 'partials/project-details.html'
    })
  $locationProvider.html5Mode(true);
}]);

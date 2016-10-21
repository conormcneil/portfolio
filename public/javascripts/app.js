var app = angular.module('projectApp',['ngAnimate']);

app.config(["$locationProvider",function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);

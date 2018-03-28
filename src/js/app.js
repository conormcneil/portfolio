var app = angular.module('hireMe',['ngAnimate']);

app.config(["$locationProvider",function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);

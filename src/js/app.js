var app = angular.module('hireMe', []);

app
    .config(["$locationProvider", function($locationProvider) {
        $locationProvider.html5Mode(true);
    }])
    .directive('ckProjects', function() {
        return {
            templateUrl: '/html/projects.html',
            controller: 'ProjectController'
        }
    })
    .directive('ckProjectDetails', function() {
        return {
            templateUrl: '/html/project-details.html',
            controller: 'ProjectController'
        }
    });
app.controller('ProjectController',makeProjectController);
app.controller('AboutMeController',makeAboutMeController);
app.controller('ParallaxController',makeParallaxController);

makeProjectController.$inject = ['$scope','ProjectService'];
makeAboutMeController.$inject = ['$scope'];
makeParallaxController.$inject = ['$scope'];

function makeProjectController($scope,ProjectService){
  $scope.view = {};
  $scope.view.projects = ProjectService.projects;
};
function makeAboutMeController($scope) {
  $scope.view = {};
  $scope.view.greeting = 'Hi! I\'m Conor!';
};
function makeParallaxController($scope) {
  $scope.view = {};
  $scope.view.greeting = 'hello, parallax!';
  $scope.view.myPattern = '../images/Kustodiev_The_Bolshevik.jpg';
};

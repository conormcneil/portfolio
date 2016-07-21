app.controller('ProjectController',makeProjectController);
app.controller('AboutMeController',makeAboutMeController);

makeProjectController.$inject = ['$scope','ProjectService'];
makeAboutMeController.$inject = ['$scope'];

function makeProjectController($scope,ProjectService){
  $scope.view = {};
  $scope.view.projects = ProjectService.projects;
};
function makeAboutMeController($scope) {
  $scope.view = {};
  $scope.view.greeting = 'Hi! I\'m Conor!';
};

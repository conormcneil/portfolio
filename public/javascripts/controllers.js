app.controller('ProjectController',makeProjectController);
app.controller('AboutMeController',makeAboutMeController);
app.controller('HeaderController',makeHeaderController);

makeProjectController.$inject = ['$scope','ProjectService'];
makeAboutMeController.$inject = ['$scope'];
makeHeaderController.$inject = ['$scope'];

function makeProjectController($scope,ProjectService){
  $scope.view = {};
  $scope.view.projects = ProjectService.projects;
};
function makeAboutMeController($scope) {
  $scope.view = {};
  $scope.view.greeting = 'Hi! I\'m Conor!';
};
function makeHeaderController($scope) {
  $scope.view = {};
  $scope.view = {
    showMenu: false
  };
  $scope.toggle = function(formName) {
    $scope.view[formName] = !$scope.view[formName];
  };
};

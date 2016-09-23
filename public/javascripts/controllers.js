app.controller('ProjectController',makeProjectController);
app.controller('HeaderController',makeHeaderController);

makeProjectController.$inject = ['$scope','ProjectService'];
makeHeaderController.$inject = ['$scope'];

function makeProjectController($scope,ProjectService){
  $scope.view = {};
  $scope.view.projects = ProjectService.projects;
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

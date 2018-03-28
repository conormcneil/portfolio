app.controller('ProjectController',makeProjectController);
app.controller('HeaderController',makeHeaderController);

makeProjectController.$inject = ['$scope','ProjectService'];
makeHeaderController.$inject = ['$scope'];

function makeProjectController($scope,ProjectService){
  $scope.view = {};
  $scope.view.projectDetails = false;
  $scope.view.projects = ProjectService.projects;
  $scope.view.setActiveProject = function(id) {
    $scope.view.projects.map(function(e) {
      if (e.id === id) $scope.view.activeProject = e;
    });
  };
  $scope.toggle = function(formName) {
    $scope.view[formName] = !$scope.view[formName];
  };
};
function makeHeaderController($scope) {
  $scope.view = {
    showMenu: false
  };
  $scope.toggle = function(formName) {
    $scope.view[formName] = !$scope.view[formName];
  };
};

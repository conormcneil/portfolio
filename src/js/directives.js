app
  .directive('ckProjects',function() {
    return {
      templateUrl: '/html/projects.html',
      controller: 'ProjectController'
    }
  })
  .directive('ckProjectDetails',function() {
    return {
      templateUrl: '/html/project-details.html',
      controller: 'ProjectController'
    }
  });

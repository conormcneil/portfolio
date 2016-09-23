app
  .directive('ckHeader',function() {
    return {
      templateUrl: 'partials/header.html',
      controller: 'HeaderController'
    };
  })
  .directive('ckNav',function() {
    return {
      templateUrl: 'partials/nav.html'
    }
  })
  // .directive('ckProject',function() {
  //   return {
  //     templateUrl: 'partials/project.html'
  //   };
  // })
  // .directive('ckAboutMe',function() {
  //   return {
  //     templateUrl: 'partials/about-me.html'
  //     // controller: makeAboutMeController
  //   };
  // })
  // .directive('ckResume',function() {
  //   return {
  //     templateUrl: 'partials/resume.html'
  //   };
  // })
  .directive('ckHome',function() {
    return {
      templateUrl: '/partials/home.html'
    }
  })
  .directive('ckProjects',function() {
    return {
      templateUrl: '/partials/projects.html',
      controller: 'ProjectController'
    }
  })
  .directive('ckProject',function() {
    return {
      templateUrl: '/partials/project.html'
    }
  })
  .directive('ckAboutMe',function() {
    return {
      templateUrl: '/partials/about-me.html'
    }
  })
  .directive('ckFooter',function() {
    return {
      templateUrl: '/partials/footer.html'
    }
  });

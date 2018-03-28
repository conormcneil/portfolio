app
  .directive('ckHeader',function() {
    return {
      templateUrl: 'html/header.html',
      controller: 'HeaderController'
    };
  })
  .directive('ckNav',function() {
    return {
      templateUrl: 'html/nav.html'
    }
  })
  .directive('ckHome',function() {
    return {
      templateUrl: '/html/home.html'
    }
  })
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
  })
  .directive('ckAboutMe',function() {
    return {
      templateUrl: '/html/about-me.html'
    }
  })
  .directive('ckContactMe',function() {
    return {
      templateUrl: '/html/contact-me.html'
    }
  })
  .directive('ckFooter',function() {
    return {
      templateUrl: '/html/footer.html'
    }
  });

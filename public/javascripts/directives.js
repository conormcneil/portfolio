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
  .directive('ckAboutMe',function() {
    return {
      templateUrl: '/partials/about-me.html'
    }
  })
  .directive('ckContactMe',function() {
    return {
      templateUrl: '/partials/contact-me.html'
    }
  })
  .directive('ckFooter',function() {
    return {
      templateUrl: '/partials/footer.html'
    }
  });

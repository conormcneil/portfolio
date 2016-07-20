app.directive('ckProject',function() {
  return {
    templateUrl: 'partials/project.html',
    controller: makeProjectController
  }
})
.directive('ckAboutMe',function() {
  return {
    templateUrl: 'partials/about-me.html',
    controller: makeAboutMeController
  }
});

app.directive('ckResume',function() {
  return {
    templateUrl: 'partials/resume.html'
  }
})

app.service('ProjectService', function() {
  return {
    projects: [{
      title: 'Finding Fido',
      url: 'https://findingfido.herokuapp.com/',
      collaborators: ['Lizzie Szoke','Andrew West'],
      screenshot: 'https://res.cloudinary.com/dmuipy77o/image/upload/v1467838950/Screen_Shot_2016-07-06_at_2.59.03_PM_w6z5zj.png',
      description: 'Finding Fido is a project that attempts to help reunite users with lost pets. Losing a pet can be very stressful and putting up posters around your neighborhood can often feel futile and cumbersome. With Finding Fido, users can post pictures and descriptions of lost pets so that others nearby can look out for them. It also allows users to post when they have found a wandering pet. In this case, users can tell other users when they have found an animal that may belong to someone. The goal is to reduce the number of pets sent to animal shelters where they are eventually and tragically euthanized.'
    },
    {
      title: 'Follow the Money',
      url: 'https://followthemoney.firebaseapp.com/',
      collaborators: [],
      screenshot: 'https://res.cloudinary.com/dmuipy77o/image/upload/v1467838947/Screen_Shot_2016-07-06_at_2.58.35_PM_dmqmtm.png',
      description: 'Many people are concerned with the amount of money making its way through our political system, though few of us are able to track where the money comes from. Follow the Money attempts to increase awareness by allowing users to track how much money specific members of Congress are spending in their election campaigns and which Congressional committees are funding them.'
    }]
  };
});

app.service('ProjectService', function() {
  return {
    projects: [
      {
        title: 'Divide Yourself',
        url: 'https://divideq3.herokuapp.com/',
        collaborators: [
          {
            name: 'Ryan Kane',
            github: 'https://github.com/KaneLabs'
          },
          {
            name: 'Brendan Haskins',
            github: 'https://github.com/ziopads'
          },
          {
            name: 'Nathan Musselman',
            github: 'https://github.com/NathanMuss'
          },
          {
            name: 'Sean Murray',
            github: 'https://github.com/sean-xd'
          }
        ],
        technologies: ['Angular.js','HTML5','CSS3'],
        screenshot: 'https://res.cloudinary.com/dmuipy77o/image/upload/v1470671326/Screen_Shot_2016-08-08_at_9.48.08_AM_y6brq3.png',
        description: 'Divide Yourself is an outdoor adventure app intended to motivate and inspire people explore their greater backyards. The application allows users to share photos of their outdoor experiences and geotag the location. Other users can then see what types of activities exist nearby and can explore those areas themselves.'
      },
      {
      title: 'Finding Fido',
      url: 'https://findingfido.herokuapp.com/',
      collaborators: [
        {
          name: 'Lizzie Szoke',
          github: 'https://github.com/lizziesz'
        },
        {
          name: 'Andrew West',
          github: 'https://github.com/westaa'
        }
      ],
      technologies: ['Express.js','Node.js','HTML5','CSS3','SASS'],
      screenshot: 'https://res.cloudinary.com/dmuipy77o/image/upload/v1467838950/Screen_Shot_2016-07-06_at_2.59.03_PM_w6z5zj.png',
      description: 'Finding Fido is a project that attempts to help reunite users with lost pets. Losing a pet can be very stressful and putting up posters around your neighborhood can often feel futile and cumbersome. With Finding Fido, users can post pictures and descriptions of lost pets so that others nearby can look out for them. It also allows users to post when they have found a wandering pet. In this case, users can tell other users when they have found an animal that may belong to someone. The goal is to reduce the number of pets sent to animal shelters where they are eventually and tragically euthanized.'
    },
    {
      title: 'Follow the Money',
      url: 'https://followthemoney.firebaseapp.com/',
      collaborators: [],
      technologies: ['JavaScript','HTML5','CSS3'],
      screenshot: 'https://res.cloudinary.com/dmuipy77o/image/upload/v1467838947/Screen_Shot_2016-07-06_at_2.58.35_PM_dmqmtm.png',
      description: 'Many people are concerned with the amount of money making its way through our political system, though few of us are able to track where the money comes from. Follow the Money attempts to increase awareness by allowing users to track how much money specific members of Congress are spending in their election campaigns and which Congressional committees are funding them. The application was designed using JavaScript, HTMl5, CSS3, and SASS.'
    }]
  };
});

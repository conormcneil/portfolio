angular.module('hireMe', [])
    .config(["$locationProvider", function($locationProvider) {
        $locationProvider.html5Mode(true);
    }])
    
    .directive('ckProjects', function() {
        return {
            templateUrl: '/html/projects.html'
        }
    })
    .directive('ckProjectDetails', function() {
        return {
            templateUrl: '/html/project-details.html'
        }
    })
    
    .controller('ProjectController', ['$scope','portfolio',function($scope,portfolio) {
        $scope.view = {
            projectDetails: false
            ,projects: portfolio.projects
            ,showMenu: false
            ,setActiveProject: (id) => {
                $scope.view.projects.map(function(e) {
                    if (e.id === id) $scope.view.activeProject = e;
                });
            }
            ,toggle: function(formName) {
                $scope.view[formName] = !$scope.view[formName];
            }
        };
    }])
    
    .service('portfolio', function() {
        return {
            projects: [{
                    id: 1,
                    title: 'The Sun and the Spoon',
                    url: 'https://thesunandthespoon.herokuapp.com/',
                    github: 'https://github.com/conormcneil/thesunandthespoon',
                    technologies: ['Angular.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Sass', 'ui-Router'],
                    screenshot: 'https://res.cloudinary.com/dmuipy77o/image/upload/v1475787515/Screen_Shot_2016-10-06_at_2.57.33_PM_su3yip.png',
                    description: 'The Sun and the Spoon is redesign for a vegan food blog run by a professional food journalist and photographer. The app boasts a simple, elegant design that is responsive on any device. As the vibrant photographs provide all the color necessary, the palette for the project is simply black and white. This layout allows the content to stand out above all else while still providing users with intuitive control over their experience.'
                }
                ,{
                    id: 2,
                    title: 'Farmer\'s Table',
                    url: 'https://farmerstable.herokuapp.com/',
                    github: 'https://github.com/conormcneil/farmerstable',
                    technologies: ['Angular.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Sass', 'TDD (Intern/Jasmine)', 'Google Maps API', 'Angular Google Maps'],
                    screenshot: 'https://res.cloudinary.com/dmuipy77o/image/upload/v1473439545/farmers-table_owjmhx.png',
                    description: 'Farmer\'s Table is designed to connect local farmer\'s with their communities by digitizing CSAs and providing a space for customers to communicate and connect directly with their local farmers. In this way, users can engage in their local food systems, support local economies, and receive access to healthy, fresh food, often at a lower price than what one may find at conventional grocery stores. The goal is that users will become more aware of where their food comes from and how much purchasing power consumers wield.'
                }
                ,{
                    id: 3,
                    title: 'Divide Yourself',
                    url: 'https://divideq3.herokuapp.com/',
                    github: 'https://github.com/KaneLabs/divideyourselfq3',
                    collaborators: [{
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
                    technologies: ['Angular.js', 'Node.js', 'Express.js', 'PostgreSQL', 'HTML5', 'CSS3'],
                    screenshot: 'https://res.cloudinary.com/dmuipy77o/image/upload/v1470671326/Screen_Shot_2016-08-08_at_9.48.08_AM_y6brq3.png',
                    description: 'Divide Yourself is an outdoor adventure app intended to motivate and inspire people explore their greater backyards. The application allows users to share photos of their outdoor experiences and geotag the location. Other users can then see what types of activities exist nearby and can explore those areas themselves.'
                }
                ,{
                    id: 4,
                    title: 'Finding Fido',
                    url: 'https://findingfido.herokuapp.com/',
                    github: 'https://github.com/conormcneil/lostpets',
                    collaborators: [{
                            name: 'Lizzie Szoke',
                            github: 'https://github.com/lizziesz'
                        },
                        {
                            name: 'Andrew West',
                            github: 'https://github.com/westaa'
                        }
                    ],
                    technologies: ['Express.js', 'Node.js', 'HTML5', 'CSS3', 'SASS', 'OAuth'],
                    screenshot: 'https://res.cloudinary.com/dmuipy77o/image/upload/v1467838950/Screen_Shot_2016-07-06_at_2.59.03_PM_w6z5zj.png',
                    description: 'Finding Fido is a project that attempts to help reunite users with lost pets. Losing a pet can be very stressful and putting up posters around your neighborhood can often feel futile and cumbersome. With Finding Fido, users can post pictures and descriptions of lost pets so that others nearby can look out for them. It also allows users to post when they have found a wandering pet. In this case, users can tell other users when they have found an animal that may belong to someone. The goal is to reduce the number of pets sent to animal shelters where they are eventually and tragically euthanized.'
                }
            ]
        };
    });
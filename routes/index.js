var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var imgSrc = 'public/images/FollowTheMoney.png';
  res.render('index', {
    title: "Conor Kingston",
    image: imgSrc
  });
});

router.get('/shelby', function(req, res, next) {
  // var imgSrc = '';
  res.render('index', {
    title: "Shelby's page"
  })
})

module.exports = router;

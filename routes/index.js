var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/police:lat:long', function(req, res, next) {
  let lat = req.params.lat;
  let long = req.params.long;
  let policeData = require('../data/policeData');
  policeData.forEach(data => {
    data;
  });
  let

      requests = policeData.map((item) => {
        return new Promise((resolve) => {
          (item, resolve);
        });
      });

  Promise.all(requests).then(() => console.log('done'));
  'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins= [ ] &destinations= [ ] &key=AIzaSyBUcBI3f1c41jwgAsmtWJ41xXPQlCvaAX8';
  res.render('index', {
    policeData: policeData,
    policeClosest: policeClosest,
  });
});

router.get('/', function(req, res, next) {

});

module.exports = router;

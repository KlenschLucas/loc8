var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/police:latlong', function(req, res, next) {
  let latlong = req.params.latlong;
  let coords = latlong.split('&');
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
router.post('/hospital', function(req, res, next) {
  let hospitalData = require('../data/hospitalData');


  res.render('index', {
    policeData: policeData,
    policeClosest: policeClosest,
  });
});

router.get('/', function(req, res, next) {
  res.render('location');
});
let distances = [];
router.post('/', function(req, res, next) {
  let coords = req.body.json;
  let policeData = require('../data/policeData');
  let hospitalData = require('../data/hospitalData');
  // hospitalData.data.map(data => {
  //        let json = request('https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=' +
  //                   item[11], item[10] + '&destinations=' + lat + ',' + long +
  //                   '&key=AIzaSyBUcBI3f1c41jwgAsmtWJ41xXPQlCvaAX8');
  //               distances.push(json.rows.elements[0].distance.value);
  // },
  
  res.render('index', {
    policeData: policeData,
    hospitalData: hospitalData,
    coords: coords,
  });
// );
});

module.exports = router;

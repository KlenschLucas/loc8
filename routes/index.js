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
router.post('/hospital:lat:long', function(req, res, next) {
  let lat = req.body.lat;
  let long = req.body.long;
  let policeData = require('../data/policeData');
  // policeData.forEach(data => {
  //   data;
  // });
  // let shortest={
  //   l
  // }
  //
  //     requests = policeData.map((item) => {
  //       return new Promise((resolve) => {
  //         let json = request('https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=' +
  //             item[11], item[10] + '&destinations=' + lat + ',' + long +
  //             '&key=AIzaSyBUcBI3f1c41jwgAsmtWJ41xXPQlCvaAX8',
  //             // if);
  //
  //         // (item, resolve);
  //       // });
  //     });
  //
  // Promise.all(requests).then(() => console.log('done'));

  res.render('index', {
    policeData: policeData,
    policeClosest: policeClosest,
  });
});

router.get('/', function(req, res, next) {
  res.render('location');
});
router.post('/police', function(req, res) {
  //lookup campground using ID
  Campground.findById(req.params.id, function(err, campground) {
    if (err) {
      console.log(err);
      res.redirect('/campgrounds');
    } else {
      Comment.create(req.body.comment, function(err, comment) {
        if (err) {
          console.log(err);
        } else {
          //add username and id to comment
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          //save comment
          comment.save();
          campground.comments.push(comment);
          campground.save();
          console.log(comment);
          req.flash('success', 'Created a comment!');
          res.redirect('/campgrounds/' + campground._id);
        }
      });
    }
  });
});
router.post('/', function(req, res, next) {
  let coords = req.body.json;
  let policeData = require('../data/policeData');
  let hospitalData = require('../data/hospitalData');
  // hospitalData.forEach(data => {
  //
  // });
  res.render('index', {
    policeData: policeData,
    hospitalData: hospitalData,
    coords: coords,
  });
});

module.exports = router;

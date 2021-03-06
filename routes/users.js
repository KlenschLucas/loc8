const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const expressValidator = require('express-validator');
router.use(expressValidator());

// imports user schema
const User = require('../models/user');

// checks if user is logged in
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/users/login');
  }
};

// Register
router.get('/signup', (req, res) => {
  res.render('login/signup');
});

// Login
router.get('/login', (req, res) => {
  res.render('login');
});
router.get('/', (req, res) => {
  res.render('login/index');
});

// Register User
router.post('/signup', function(req, res) {
  const idNumber = req.body.id;
  const password = req.body.password;
  const password2 = req.body.password2;

  // Validation
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').
      equals(req.body.password);

  const errors = req.validationErrors();

  if (errors) {
    res.render('login/signup', {
      errors: errors,
    });
  } else {
    User.getUserById(username, (err, user) => {
      if (err) throw err;
      if (!user) {
        const newUser = new User({
          idNumber: idNumber,
          password: password,
          name: req.body.name,
          address: req.body.address,
          mobile: req.body.mobile,
          email: req.body.email,

        });

        User.createUser(newUser, err => {
          if (err) throw err;
        });

        req.flash('success_msg', 'You are registered and can now login');

        res.redirect('/users/login');
      } else {

        res.redirect('/users/signup');
      }
    });

  }
});

passport.use(new LocalStrategy((email, password, done) => {
  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return done(null, false, {message: 'Unknown User'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, {message: 'Invalid password'});
      }
    });
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.getUserById(id, (err, user) => {
    done(err, user);
  });
});

router.post('/',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/users/login',
      failureFlash: true,
    }),
    (req, res) => {
      res.redirect('/');
    },
);

router.post('/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/users/login',
      failureFlash: true,
    }),
    (req, res) => {
      res.redirect('/');
    },
);
router.get('/logout', (req, res) => {
  req.logout();

  res.redirect('/users/login');
});

module.exports = router;
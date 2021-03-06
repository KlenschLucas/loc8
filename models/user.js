const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const UserSchema = mongoose.Schema({
      email: {
        type: String,
        index: true,
        unique:
            true,
      },
      name: {
        type: String,
        index: true,
      },
      mobile: {
        type: String,
        index: true,
      }
      ,
      idNumber: {
        type: String,
        index:
            true,
        unique:
            true,
      }
      ,
      password: {
        type: String,
      },
      address: {
        type: String,
      },
    })
;

let User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.getUserByIdNumber = function(id, callback) {
  let query = {id: username};
  User.findOne(query, callback);
};

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
};
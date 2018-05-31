const db = require('../../database/users-model');
const session = require('express-session');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

module.exports = {
  get: function() {

  },
  post: function() {
    db.User.pre('save', function(next) {
      let user = this;
      if (!user.isModified('password')) { return next(); }
      bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }
        bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) { return next(err); }
          user.password = hash;
          next();
        })
      });
    })
  }
}
//_.dirname?
// becrypt.compare
// becrypt.has
//
const mongoose = require('mongoose');
mongoose.connect('');

let usersSchema = mongoose.Schema({
  username: String,
  password: String,
  created_at: Date,
  gifted: Array,
  claimed: Array,
  karma: Number,
  tokenCount: Number,
  isAdmin: Boolean
})

let User = mongoose.model('User', usersSchema);


/*

FUNCTIONS WE WILL NEED:

Save : Saving users into the database

Update : Update user info

AddToGifted : Add listing into the gifted array

AddToClaimed : Add listing into the claimed array

*/


module.exports
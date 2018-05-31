const mongoose = require('mongoose');
mongoose.connect('');

let listingsSchema = mongoose.Schema({
  _id: {type: Number, unique: true},
  user_id: Number,
  isFreecycle: Boolean,
  isAvailable: Boolean,
  created_at: Date,
  updated_at: Date,
  interested_users: Array,
  description: String,
  photo: String
});

let Listing = mongoose.model('Listing', listingsSchema);

/*

FUNCTIONS WE WILL NEED:

Save : Saving listings into the database

Claim : Marking listings as claimed

Update : Updating listings

AddInterest : Adding user to interested_users array for a listing

*/
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


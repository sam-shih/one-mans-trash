const mongoose = require('mongoose');
mongoose.connect('');

let usersSchema = mongoose.Schema({
  _id: {type: Number, unique: true},
  username: String,
  password: String,
  created_at: Date,
  listings: Array,
  gifted: Array,
  claimed: Array,
  karma: Number,
  tokenCount: Number,
  isAdmin: Boolean
})

let User = mongoose.model('User', usersSchema);
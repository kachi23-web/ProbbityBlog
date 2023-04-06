const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  email: {type:email,unique: true },
});

module.exports = mongoose.model('User', userSchema);

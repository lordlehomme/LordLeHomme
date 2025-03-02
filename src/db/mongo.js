const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  orders: [String],
  chats: [String],
  userType: String, // ga, ro, re, dv
  loyaltyLevel: String,
  amountSpent: Number,
  amountEarned: Number
});

const User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost:27017/yourDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

module.exports = User;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  roomno: Number,
  bedrooms: Number,
  bathrooms:Number,
  description: String,
  location: String,
  title: String,
  pic_url:String,
  price:String,
  booked: { type: Boolean, default: false },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
});

module.exports = mongoose.model('Airbnb', userSchema, 'Airbnb');
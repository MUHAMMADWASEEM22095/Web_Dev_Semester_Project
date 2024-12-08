const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  id: Number,
  bedrooms: Number,
  description: String,
  location: String,
  title: String,
  pic_url:String,
  price:String
});

module.exports = mongoose.model('Airbnb', userSchema, 'Airbnb'); // Third argument tells Mongoose the exact collection name

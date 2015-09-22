var mongoose = require('mongoose');

var truckSchema = new mongoose.Schema({
  truckname: String,
  cuisine: String,
  description: String,
  menu: [{item: String}],
  locations: {
    monday: { name: String, lat: Number, lon: Number },
    tuesday: { name: String, lat: Number, lon: Number },
    wednesday: { name: String, lat: Number, lon: Number },
    thursday: { name: String, lat: Number, lon: Number },
    friday: { name: String, lat: Number, lon: Number },
    satday: { name: String, lat: Number, lon: Number },
    sunday: { name: String, lat: Number, lon: Number },
  }
});

module.exports = mongoose.model('Truck', truckSchema);

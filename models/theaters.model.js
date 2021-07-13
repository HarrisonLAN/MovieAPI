const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    theaterId: Number,
    location: {
     address: {
         street1: String,
         city: String,
         State: String,
         zipcode: String

     },
     geo: {
         type: String,
         coordinates: [GeolocationCoordinates]
     }  
    }
});

module.exports = mongoose.model('users', UserSchema);
var db = require('../util/database'); //requires the database

var Schema = db.Schema; //creates the schema

var ParkingSchema = new Schema({ //specifies the schema for the connections 
    _id: Number,
    name: String,
    distanceFrom: Number,
    isFaculty: String, 
    isResident: String,
    isCommuter: String,
    isVisitor: String,
    destination: String
})


var Parking = db.model('Parking', ParkingSchema); //creates the model


module.exports = Parking; //exports the model
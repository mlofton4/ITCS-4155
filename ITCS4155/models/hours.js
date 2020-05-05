var db = require('../util/database'); //requires the database

var Schema = db.Schema; //creates the schema

var HoursSchema = new Schema({ //specifies the schema for the connections
    name: String, 
    hour: Number,
    percentFull: String,
 
})


var Hours = db.model('Hours', HoursSchema); //creates the model

module.exports = Hours; //exports the model
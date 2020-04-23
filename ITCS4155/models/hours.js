var db = require('../util/database'); //requires the database

var Schema = db.Schema; //creates the schema

var HoursSchema = new Schema({ //specifies the schema for the connections
    name: String, 
    hour: Number,
    percentFull: String,
 
})


var Hours = db.model('Hours', HoursSchema); //creates the model

/*
var hour11 = new Hours({name: 'Cone Deck 1', hour: 1, percentFull: 0});
var hour12 = new Hours({name: 'Cone Deck 1', hour: 2, percentFull: 0});
var hour13 = new Hours({name: 'Cone Deck 1', hour: 3, percentFull: 0});
var hour14 = new Hours({name: 'Cone Deck 1', hour: 4, percentFull: 0});
var hour15 = new Hours({name: 'Cone Deck 1', hour: 5, percentFull: 0});
var hour16 = new Hours({name: 'Cone Deck 1', hour: 6, percentFull: 0});
var hour17 = new Hours({name: 'Cone Deck 1', hour: 7, percentFull: 0});
var hour18 = new Hours({name: 'Cone Deck 1', hour: 8, percentFull: 0});
var hour19 = new Hours({name: 'Cone Deck 1', hour: 9, percentFull: 0});
var hour120 = new Hours({name: 'Cone Deck 1', hour: 10, percentFull: 0});
var hour121 = new Hours({name: 'Cone Deck 1', hour: 11, percentFull: 0});
var hour122 = new Hours({name: 'Cone Deck 1', hour: 12, percentFull: 0});

*/
module.exports = Hours; //exports the model
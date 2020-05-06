var db = require('../util/database');

var Schema = db.Schema;

var ClassSchema = new Schema({
        userid: Number,
        name: String,
        day: String,
        time: String,
        building: String,
        hour: Number
   
    });


var Classes = db.model('Classes', ClassSchema);

module.exports = Classes;
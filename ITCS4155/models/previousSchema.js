var db = require('../util/database');

var Schema = db.Schema;

var PreviousSchema = new Schema({
        destid: Number,
        userid: Number,
        date: String,
        time: String,
        building: String
    });


var Previous = db.model('PreviousLocations', PreviousSchema);

module.exports = Previous;
var db = require('../util/database');

var Schema = db.Schema;

var PreviousSchema = new Schema({
        userid: Number,
        day: String,
        time: String,
        location: String,
        deck: String
    });


var Previous = db.model('PreviousLocations', PreviousSchema);

module.exports = Previous;
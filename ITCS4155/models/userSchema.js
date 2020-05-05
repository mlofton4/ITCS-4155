var db = require('../util/database');

var Schema = db.Schema;

var UserSchema = new Schema({
        _id: Number,
        classification: String,
        firstname: String,
        email: String,
        username: String,
        password: String,
   
    });


var Users = db.model('Users', UserSchema);

module.exports = Users;

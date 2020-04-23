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

var Marcus = new Users({_id: 1200, classification: 'residential', firstname: 'Marcus', email:'mlofton4@uncc.edu', username: 'mlofton4', password: '123456' });

Marcus.save(function(err){
    if(err)return console.error(err);
    console.log("we just made the user");
});

module.exports = Users;

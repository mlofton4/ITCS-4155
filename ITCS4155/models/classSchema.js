var db = require('../util/database');

var Schema = db.Schema;

var ClassSchema = new Schema({
        userid: Number,
        name: String,
        day: String,
        time: String,
        location: String
   
    });


var Classes = db.model('Classes', ClassSchema);

var class1 = new Classes({userid: 1200, name: 'MATH 5100', day: 'Monday', time: '9:30AM', location: 'woodward'});
var class2 = new Classes({userid: 1200, name: 'SPAN 2100', day: 'Thursday', time: '9:00AM', location: 'friday'});
var class3 = new Classes({userid: 1200, name: 'ITCS 2400', day: 'Thursday', time: '10:00AM', location: 'woodward'});
var class4 = new Classes({userid: 1200, name: 'ITCS 1000', day: 'Wednesday', time: '9:00AM', location: 'smith'});

class1.save(function(err){
    if(err)return console.error(err);
});
class2.save(function(err){
    if(err)return console.error(err);
});
class3.save(function(err){
    if(err)return console.error(err);
});
class4.save(function(err){
    if(err)return console.error(err);
    console.log("we just sent the classes")
});

module.exports = Classes;
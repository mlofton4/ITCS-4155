//requires the mongoose 
var mongoose = require('mongoose');

//connects to the database
mongoose.connect('mongodb://localhost/4155', {useNewUrlParser: true}, function(){
    console.log("we connected");
});
//exports the database
module.exports = mongoose;
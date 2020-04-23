var db = require('../util/database'); //requires the database

var Schema = db.Schema; //creates the schema

var ParkingSchema = new Schema({ //specifies the schema for the connections 
    _id: Number,
    name: String,
    distanceFrom: Number,
    isFaculty: String, 
    isResident: String,
    isCommuter: String,
    isVisitor: String
})


var Parking = db.model('Parking', ParkingSchema); //creates the model


var parkingOption1 = new Parking({_id: 1, name: 'Cone Deck 1', distanceFrom: 0, isFaculty: 'yes', isResident: 'no', isCommuter: 'no', isVisitor: 'no'});
var parkingOption2 = new Parking({_id: 2, name: 'Cone Deck 2', distanceFrom: 0, isFaculty: 'no', isResident: 'no', isCommuter: 'no', isVisitor: 'yes'});
var parkingOption3 = new Parking({_id: 3, name: 'CRI Deck', distanceFrom: 0, isFaculty: 'yes', isResident: 'no', isCommuter: 'yes', isVisitor: 'yes'});
var parkingOption4 = new Parking({_id: 4, name: 'East Deck 1', distanceFrom: 0, isFaculty: 'yes', isResident: 'no', isCommuter: 'no', isVisitor: 'yes'});
var parkingOption5 = new Parking({_id: 5, name: 'East Deck 2', distanceFrom: 0, isFaculty: 'no', isResident: 'no', isCommuter: 'yes', isVisitor: 'no'});
var parkingOption6 = new Parking({_id: 6, name: 'East Deck 3', distanceFrom: 0, isFaculty: 'no', isResident: 'no', isCommuter: 'yes', isVisitor: 'no'});
var parkingOption7 = new Parking({_id: 7, name: 'North Deck', distanceFrom: 0, isFaculty: 'no', isResident: 'yes', isCommuter: 'yes', isVisitor: 'no'});
var parkingOption8 = new Parking({_id: 8, name: 'South Village Deck', distanceFrom: 0, isFaculty: 'no', isResident: 'yes', isCommuter: 'yes', isVisitor: 'yes'});
var parkingOption9 = new Parking({_id: 9, name: 'Union Deck Lower', distanceFrom: 0, isFaculty: 'no', isResident: 'no', isCommuter: 'yes', isVisitor: 'no'});
var parkingOption10 = new Parking({_id: 10, name: 'Union Deck Upper', distanceFrom: 0, isFaculty: 'yes', isResident: 'no', isCommuter: 'yes', isVisitor: 'yes'});
var parkingOption11 = new Parking({_id: 11, name: 'West Deck', distanceFrom: 0, isFaculty: 'no', isResident: 'no', isCommuter: 'yes', isVisitor: 'no'});

parkingOption1.save(function(err){
    if(err)return console.error(err);
});
parkingOption2.save(function(err){
    if(err)return console.error(err);
});
parkingOption3.save(function(err){
    if(err)return console.error(err);
});
parkingOption4.save(function(err){
    if(err)return console.error(err);
});
parkingOption5.save(function(err){
    if(err)return console.error(err);
});
parkingOption6.save(function(err){
    if(err)return console.error(err);
});
parkingOption7.save(function(err){
    if(err)return console.error(err);
});
parkingOption8.save(function(err){
    if(err)return console.error(err);
});
parkingOption9.save(function(err){
    if(err)return console.error(err);
});

parkingOption10.save(function(err){
    if(err)return console.error(err);
});
parkingOption11.save(function(err){
    if(err)return console.error(err);
    console.log("we just sent over all parking options");
});


module.exports = Parking; //exports the model
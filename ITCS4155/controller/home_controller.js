var express = require('express');
var router = express.Router();


//let UserInfo = require('../models/user'); //requires the model users

let Parking = require('../util/parkingOptions');
ParkingDecks = new Parking(); //access needed to get the functions

//router for the connection
router.get('/', function(req, res){
     
  res.render('4155home', {my: ParkingDecks.getParkingOptions()});

});
//exports the router
module.exports = router;


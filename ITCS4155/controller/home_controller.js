var express = require('express');
var router = express.Router();


let Parking = require('../util/parkingOptions');
ParkingDecks = new Parking(); //access needed to get the functions




//router for the connection
router.get('/', async function(req, res){
    let HourlySpace = await ParkingDecks.DecksHourly();
res.render('4155home', {my: HourlySpace});

});
//exports the router
module.exports = router;


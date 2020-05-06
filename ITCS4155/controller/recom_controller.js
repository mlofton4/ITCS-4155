var express = require('express');
var router = express.Router();


//let UserInfo = require('../models/user'); //requires the model users

let Parking = require('../util/parkingOptions');
ParkingDecks = new Parking(); //access needed to get the functions

let PreviousDest = require('../util/userProfile');

//router that will be used for 
router.post('/', async function(req, res){
  global.building = req.body.location;
  
  global.class = req.body.classify;

  if(global.signedin){
  let a = await PreviousDest.StorePrevious(global.userID, global.building)
  }
  res.redirect('/recommendations');
});


//router for the recommendations page
router.get('/', async function(req, res){
  if(req.query.building != null){
    global.building = req.query.building;
  }

    console.log(global.building);
    console.log(global.class);
    let resident = await ParkingDecks.FindBestParkingR(global.building)
    let faculty = await ParkingDecks.FindBestParkingF(global.building)
    let commuter = await ParkingDecks.FindBestParkingC(global.building)
    let visitor = await ParkingDecks.FindBestParkingV(global.building)
    if(global.class == "residential"){
      res.render('4155recom', {data: resident});
    }
    else if(global.class == "faculty"){
      res.render('4155recom', {data: faculty});
    }
    else if(global.class == "commuter"){
      res.render('4155recom', {data: commuter});
    }
    else{
      res.render('4155recom', {data: visitor});
    }
  

});
//exports the router
module.exports = router;


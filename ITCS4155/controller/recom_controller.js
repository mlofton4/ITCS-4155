var express = require('express');
var router = express.Router();


//let UserInfo = require('../models/user'); //requires the model users

let Parking = require('../util/parkingOptions');
ParkingDecks = new Parking(); //access needed to get the functions



//router that will be used for 
router.post('/', function(req, res){
  global.building = req.body.location;
  
  global.class = req.body.classify;
  res.redirect('/recommendations');
});
/*  //save the user
 
 
  req.session.User = user; //stores the user in the session
  console.log(req.session);
  global.name = req.session.User._firstname; //the global variable name will now hold the first name of the user
  res.redirect('/savedConnections') //renders savedConnections
}); */

//router for the connection
router.get('/', async function(req, res){
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


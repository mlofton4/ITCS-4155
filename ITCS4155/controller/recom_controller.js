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
router.get('/', function(req, res){
    console.log(global.building);
    console.log(global.class);
    
    ParkingDecks.reset();
    ParkingDecks.CheckDistance(global.building);
    ParkingDecks.SortOptions()
    res.render('4155recom', {data: ParkingDecks.CheckClass(global.class)});
  

});
//exports the router
module.exports = router;


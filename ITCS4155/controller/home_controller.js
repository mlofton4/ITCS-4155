var express = require('express');
var router = express.Router();
const {check,validationResult} = require('express-validator');
global.logMessage = []; //will hold error messages
let Parking = require('../util/parkingOptions');
ParkingDecks = new Parking(); //access needed to get the functions

let ProfileDB = require('../util/userProfile');
Profile = new ProfileDB();

router.post('/', [
    check('firstname').isAlpha() //checks to see if the first name field is only letters
  .withMessage( 'First name must only contain letters'),
  check('email').isEmail() ///checks to see if the email field contains a email 
  .withMessage('Not in email format'),
  check('username').isAlphanumeric() //checks to ensure the username is only letters and numbers
  .withMessage('Username must be only letters and numbers'),
  check('password').isAlphanumeric() //checks to ensure the password is only letters and numbers
  .withMessage('Password must be only letters and numbers'),
],async function(req, res){
    const errors = validationResult(req) //variable to hold errors
  global.logMessage.length = 0;
  if(!errors.isEmpty()){ //if errors are found

      errors.array().forEach(function(error){ //loops through the errors array
          global.logMessage.push(error); //pushes elements into a different array
      })
      res.redirect('/signup')
  }
  else{
    let addUser =  await Profile.NewUser(req.body.classify, req.body.firstname, req.body.email, req.body.username, req.query.password);
    global.userID = addUser._id;
    global.class = addUser.classification;
    if(req.query.classname1 != ""){
        let addclass1 = await Profile.NewClasses(global.userID, req.query.classname1, req.query.classday1, req.query.classtime1, req.query.location1)
    }
    if(req.query.classname2 != ""){
        let addclass2 = await Profile.NewClasses(global.userID, req.query.classname2, req.query.classday2, req.query.classtime2, req.query.location2)
    }
    if(req.query.classname3 != ""){
        let addclass3 = await Profile.NewClasses(global.userID, req.query.classname3, req.query.classday3, req.query.classtime3, req.query.location3)
    }
    if(req.query.classname4 != ""){
        let addclass4 = await Profile.NewClasses(global.userID, req.query.classname4, req.query.classday4, req.query.classtime4, req.query.location4)
    }
    if(req.query.classname5 != ""){
        let addclass5 = await Profile.NewClasses(global.userID, req.query.classname5, req.query.classday5, req.query.classtime5, req.query.location5)
    }
    if(req.query.classname6 != ""){
        let addclass6 = await Profile.NewClasses(global.userID, req.query.classname6, req.query.classday6, req.query.classtime6, req.query.location6)
    }



  }

})

//router for the connection
router.get('/', async function(req, res){
    let HourlySpace = await ParkingDecks.DecksHourly();
res.render('4155home', {my: HourlySpace});

});
//exports the router
module.exports = router;


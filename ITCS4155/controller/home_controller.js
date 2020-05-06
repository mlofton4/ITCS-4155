var express = require('express');
var router = express.Router();

//let UserInfo = require('../models/user'); //requires the model users
global.loginMessage = [];

let Parking = require('../util/parkingOptions');
ParkingDecks = new Parking(); //access needed to get the functions

const {check,validationResult} = require('express-validator');

let UserSch = require('../models/userSchema')

router.post('/', [
    check('username').notEmpty() //username field cannot be empty
  .withMessage('Username cannot be empty'),
  check('psw').notEmpty() //password field cannot be empty
  .withMessage('Password cannot be empty')
  .custom((value, {req}) => { 
    return new Promise((resolve, reject) =>{
    UserSch.findOne({ //finds the user's login information
      username: req.body.username,
      password: req.body.psw

      
    })
    

    .then((data) =>{
      
      if(data== null){ //if no user information was found
        return Promise.reject('Username and/or password are incorrect. Please enter the correct login information'); //sends user an error message
      }
      else{
        console.log("we are looking for the user now");
        
        global.userID = data._id;//grabs the user's ID
        global.name= data.firstname;
        global.class  = data.classification

        console.log(global.userID);
        resolve();
      }

    })
     //catches any errors if they happen
     .catch((err) => {
      return reject(err);
          });
  })
})
],async function(req, res, next){
  const errors = validationResult(req) //variable to hold errors
  global.loginMessage.length = 0;
  if(!errors.isEmpty()){ //if errors are found

      errors.array().forEach(function(error){ //loops through the errors array
          global.loginMessage.push(error); //pushes elements into a different array
      })
      res.redirect('/login')
  }
  else{
  global.signedin = true; //sets the variable to true, allowing us to know that the user is signed in

  res.redirect('/') //renders home
  }
});


//router for the connection
router.get('/', async function(req, res){
    let HourlySpace = await ParkingDecks.DecksHourly();
res.render('4155home', {my: HourlySpace});

});
//exports the router
module.exports = router;


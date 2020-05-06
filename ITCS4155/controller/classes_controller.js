var express = require('express');
var router = express.Router();


let Classes = require('../util/userProfile');
ListClasses = new Classes();

//router for the profile page
router.get('/', async function(req, res){
    if(global.signedin){
      let userClasses = await ListClasses.GetClasses(global.userID);

      res.render('4155classes', {qs: userClasses});
    }

    else{
        res.redirect('/login');
    }

});
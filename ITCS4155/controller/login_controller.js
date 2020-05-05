var express = require('express');
var router = express.Router();



//router for the connection
router.get('/', function(req, res){
  res.render('4155login', {errors:global.loginMessage});

});

router.get('/logout', function(req, res){
  global.signedin = false;
  global.name = ""; //sets the global variable name
  global.userID = 0;
  res.redirect('/') //redirects the user back to the home page
   
 });
 
//exports the router
module.exports = router;


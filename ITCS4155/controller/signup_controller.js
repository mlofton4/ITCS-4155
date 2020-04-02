var express = require('express');
var router = express.Router();


//router for the connection
router.get('/', function(req, res){
  res.render('4155signup');

});
//exports the router
module.exports = router;


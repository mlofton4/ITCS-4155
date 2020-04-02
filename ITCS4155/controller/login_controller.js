var express = require('express');
var router = express.Router();

//router for the connection
router.get('/', function(req, res){
  res.render('4155login');

});
//exports the router
module.exports = router;


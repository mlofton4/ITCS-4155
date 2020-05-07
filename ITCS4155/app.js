var express = require('express');
var bodyParser = require('body-parser');
global.signedin = false; //variable to see if the user is signed in or not
global.userID = ""
global.name = "";
global.class = "";
global.building = "";



let d = require('./models/classSchema');
 //variable that will hold the name of the user once they sign in
var app = express();


app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: false}));


//require both routers made in the controller
var recommendations = require('./controller/recom_controller'); //router for the recommendations
var index = require('./controller/home_controller');
var signup = require('./controller/signup_controller');
var login = require('./controller/login_controller');
var previous = require('./controller/previous_controller');
var classes = require('./controller/classes_controller');



//uses both routers from the controller 
app.use('/recommendations', recommendations);
app.use('/', index);
app.use('/signup', signup);
app.use('/login', login);
app.use('/previous', previous);
app.use('/classes', classes);


app.get('/maps', function(req, res){
    res.redirect('https://webpages.uncc.edu/mlofton4/map.html');
  
  });


//start local server and listen on the default HTTP port 8080
app.listen(8084, '127.0.0.1');


let Previous = require('../models/previous')
let PreviousSchema = require('../models/previousSchema')
let ClassSchema = require('../models/classSchema')
let Classinfo = require('../models/nextClass')
let Userinfo = require('../models/userinfo')
let UserSchema = require('../models/userSchema')
var thisID = 1400;
class UserProfile{

    StorePrevious(userID, building, id){ //will store the locations visited by the user

        return new Promise((resolve, result)=> {
            let thisDay = new Date()
            let month = thisDay.getMonth() + 1;
            let day = thisDay.getDate();
            let year = thisDay.getFullYear();
            let date = (month + "/" + day + "/" + year);
            let time = "";
            let hour = thisDay.getHours();
            let mins = thisDay.getMinutes();
            if(hour > 12){
                hour = hour - 12;
                if(mins < 10){
                    time = ("0" + hour + ":" + "0" + mins + "" + "PM");
                } 
                else{
                    time = ("0" + hour + ":" + mins + "" + "PM");
                }
                
            }
            else{
                if(mins < 10){
                    time = ("0" + hour + ":" + "0" + mins + "" + "PM");
                } 
                else{
                    time = ("0" + hour + ":" + mins + "" + "AM");
                }
                
            }

            PreviousSchema.find({userid: userID, destid : id}) //
            .then((data) => {
                console.log("look under this")
                console.log(data);
                if(data.length == 0){
                    console.log("we are storing this destination");
                    //stores previous location in the database 
                    var previousDestination = new PreviousSchema({destid: id, userid: userID, date: date, time: time, building: building});
                    //saves the new connection
                    previousDestination.save(function(err){
                        if(err)return console.error(err);
                        console.log('we came here ')
                    });
                }

                resolve(previousDestination);

            })

             //catches any errors if they happen
        .catch((err) => {
            return reject(err);
                });
            });
    
        }

    GetPrevious(userID){

        return new Promise((resolve, reject) => {
            PreviousSchema.find({userid: userID})//finds the user in the database 
            .then((data) => {
            
            console.log("we are gathering all the user's previous destinations");

            let previousArray = []; //array that will hold the previous destinations
            data.forEach((dest) => { //loops through the data and grabs all the destinations
                let thisDest  = new Previous();
                //using the set properties for each destination
                thisDest.setID(dest.destid)
                thisDest.setuserID(dest.userid);
                thisDest.setdate(dest.date);
                thisDest.settime(dest.time);
                thisDest.setbuilding(dest.building);


                //pushes all information into the array
                previousArray.push(thisDest);
            });

            //resolve with the array 
            resolve(previousArray);            
        })

        //catches any errors if they happen
        .catch((err) => {
        return reject(err);
            });
        });
       
    }

    DeletePrevious(ID, userID){
        return new Promise((resolve, result) => {
            PreviousSchema.find({destid: ID, userid:userID})//finds the user and destination id based on the ID
            .deleteOne()//deletes the previous location from database
            .exec()
            .then(function() {

                console.log("we are removing this destination from your profile page")
                resolve();          
            })

      //catches any errors if they happen
        .catch((err) => {
            return reject(err);
                });
        });
    }

    GetClasses(ID){
        return new Promise((resolve, result) => {
            ClassSchema.find({userid : ID})//finds all classes for a user
            .then((data) => {


            let classArray = []; //array that will hold the classes
            data.forEach((value) => { //loops through the data and grabs all the classes
            
                console.log("we are getting all the user's classes");

                    let thisclass  = new Classinfo();
                    //using the set properties for each class
                    thisclass.setID(value.userid);
                    thisclass.setname(value.name);
                    thisclass.setday(value.day);
                    thisclass.settime(value.time);
                    thisclass.setbuilding(value.building);
    
                      //pushes all information into the array
                      classArray.push(thisclass);
                    });
        
                    //resolve with the array 
                    resolve(classArray);            
                })

      //catches any errors if they happen
        .catch((err) => {
            return reject(err);
                });
        });
    }

     //function that will retrive a user from the database
     getUser(ID){
        return new Promise((resolve, reject) => {
            UserSchema.findById(ID)//finds the user based on the ID
            .then((data) => {
            
            console.log("we are looking for the user now");

                let theUser = new Userinfo();
    //uses set properties to store the values of the user 
                theUser.setID(data._id);
                theUser.setClass(data.classification);
                theUser.setfirstname(data.firstname);
                theUser.setemail(data.email);
                theUser.setusername(data.username);
                theUser.setpassword(data.password);

         
                

            //resolve with the array 
            resolve(theUser);            
        })

        //catches any errors if they happen
        .catch((err) => {
        return reject(err);
            });
        });
    }

        NewUser(classify, firstname, email, username, password){
            return new Promise((resolve, result) => {
                
                //sets a user based on the id
                UserSchema.findById({thisID})
                .then((data) => {
    
                    
                    //if there has not already been a user with the ID, then this function adds the user
                    if(data.length == 0 ){
    
                        console.log("we are adding the user to the database");
    
                        var newUse = new UserSchema({_id: thisID, classification: classify, firstname: firstname, email:email, username:username, password: password}) //adds connection to the user connections model
    
                        newUse.save(function(err){//saves the user
                            if(err)return console.error(err);
                        });

                        thisID = thisID + 100;
                       
                    }
    
                    resolve(newUse);
                })
    
                
            //catches any errors if they happen
            .catch((err) => {
                return reject(err);
                    });
                });
        
        }

        NewClasses(userID, name, day, time, building){
            return new Promise((resolve, result) => {
                //finds if the class has already been added
                ClassSchema.findById({userid: userID, day: day, time:time})
                .then((data) => {
    
                    
                    //if it has not, this function adds the class
                    if(data.length == 0 ){
    
                        console.log("we are adding this class to the database");
    
                        var newClass = new ClassSchema({userid: userID, name: name, day: day, time:time, building:building}) //adds class to  model
    
                        newClass.save(function(err){//saves the connection
                            if(err)return console.error(err);
                        });
                       
                    }
    
                    resolve(newClass);
                })
    
                
            //catches any errors if they happen
            .catch((err) => {
                return reject(err);
                    });
                });
        
        }



    }

module.exports = UserProfile;
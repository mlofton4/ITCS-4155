let Previous = require('../models/previous')
let PreviousSchema = require('../models/previousSchema')
var id = 0;
class UserProfile{

    StorePrevious(userID, building){

        return new Promise((resolve, result)=> {
            let thisDay = new Date()
            let date = thisDay.getDate();
            let time = thisDay.getTime();

            PreviousSchema.find({userid: userID, destid : id})
            .then((data) => {

                if(data == null){
                    console.log("we are storing this destination");
                    //creates the new connection and stores in the database 
                    var previousDestination = new PreviousSchema({destid: id, userid: userID, date: date, time: time, building: building});
                    id++;
                    //saves the new connection
                    previousDestination.save(function(err){
                        if(err)return console.error(err);
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
            PreviousSchema.find({userid: userID})//finds all the user connections in the database 
            .then((data) => {
            
            console.log("we are gathering all the user's previous destinations");

            let previousArray = []; //array that will hold the connections
            data.forEach((dest) => { //loops through the data and grabs all the connections
                let thisDest  = new Previous();
                //using the set properties for each connection 
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
            PreviousSchema.find({destid: ID, userid:userID})//finds the connection based on the ID
            .deleteOne()//deletes the connection 
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

}

module.exports = UserProfile;
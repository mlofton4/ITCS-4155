let ParkingOption = require('../models/parking');
let ParkingList = require('../models/parkinglistSchema')
let ParkingHours = require('../models/hours')
let Hours = require('../models/hoursinfo')


//This is the code to that will hardcode the database
const ParkingOptions = [
    new ParkingOption("Cone Deck 1", 15, 0, "yes", "no", "no", "no"),
    new ParkingOption("Cone Deck 2", 5, 0, "no", "no", "no", "yes"),
    new ParkingOption("CRI Deck", 4, 0, "yes", "no", "yes", "yes"),
    new ParkingOption("East Deck 1", 0, 0, "yes", "no", "no", "yes"),
    new ParkingOption("East Deck 2", 0, 0, "no", "no", "yes", "no"),
    new ParkingOption("East Deck 3", 0, 0, "no", "no", "yes", "no"),
    new ParkingOption("North Deck", 3, 0, "no", "yes", "yes", "no"),
    new ParkingOption("South Village Deck", 7, 0, "no", "yes","yes","yes"),
    new ParkingOption("Union Deck Lower", 5, 0, "no", "no","yes","no"),
    new ParkingOption("Union Deck Upper", 96, 0, "yes", "no", "yes", "yes"),
    new ParkingOption("West Deck", 75, 0, "no", "no", "yes", "no")

];


//console.log(connections);
class Parking {

    FindBestParkingR(building){
        return new Promise((resolve, reject) => {
            ParkingList.find({destination: building, isResident: "yes"})
            .sort({distanceFrom: 'asc'})
            .then((data) => {
            
                console.log("we are searching for the best options now");
                let ResArray = []; //array that will hold the connections
                data.forEach((option) => { //loops through the data and grabs all the connections
                let thisoption  = new ParkingOption();
                //using the set properties for each connection 
                thisoption.setname(option.name);
                thisoption.setspace(option.space);
                thisoption.setdistanceFrom(option.distanceFrom);
                thisoption.setisfaculty(option.isfaculty)
                thisoption.setisresidential(option.isresidential)
                thisoption.setiscommuter(option.iscommuter);
                thisoption.setisvisitor(option.isvisitor);

                //pushes all information into the array
                ResArray.push(thisoption);
            });

            //resolve with the array 
            resolve(ResArray);            
        })
                  //catches any errors if they happen
        .catch((err) => {
            return reject(err);
                });
            });
        
    }

    FindBestParkingF(building){
        return new Promise((resolve, reject) => {
            ParkingList.find({destination: building, isFaculty: "yes"})
            .sort({distanceFrom: 'asc'})
            .then((data) => {
            
                console.log("we are searching for the best options now");
                let ResArray = []; //array that will hold the connections
                data.forEach((option) => { //loops through the data and grabs all the connections
                let thisoption  = new ParkingOption();
                //using the set properties for each connection 
                thisoption.setname(option.name);
                thisoption.setspace(option.space);
                thisoption.setdistanceFrom(option.distanceFrom);
                thisoption.setisfaculty(option.isfaculty)
                thisoption.setisresidential(option.isresidential)
                thisoption.setiscommuter(option.iscommuter);
                thisoption.setisvisitor(option.isvisitor);

                //pushes all information into the array
                ResArray.push(thisoption);
            });

            //resolve with the array 
            resolve(ResArray);            
        })
                  //catches any errors if they happen
        .catch((err) => {
            return reject(err);
                });
            });
        
    }

    FindBestParkingC(building){
        return new Promise((resolve, reject) => {
            ParkingList.find({destination: building, isCommuter: "yes"})
            .sort({distanceFrom: 'asc'})
            .then((data) => {
            
                console.log("we are searching for the best options now");
                let ResArray = []; //array that will hold the connections
                data.forEach((option) => { //loops through the data and grabs all the connections
                let thisoption  = new ParkingOption();
                //using the set properties for each connection 
                thisoption.setname(option.name);
                thisoption.setspace(option.space);
                thisoption.setdistanceFrom(option.distanceFrom);
                thisoption.setisfaculty(option.isfaculty)
                thisoption.setisresidential(option.isresidential)
                thisoption.setiscommuter(option.iscommuter);
                thisoption.setisvisitor(option.isvisitor);

                //pushes all information into the array
                ResArray.push(thisoption);
            });

            //resolve with the array 
            resolve(ResArray);            
        })
                  //catches any errors if they happen
        .catch((err) => {
            return reject(err);
                });
            });
        
    }

    FindBestParkingV(building){
        return new Promise((resolve, reject) => {
            ParkingList.find({destination: building, isVisitor: "yes"})
            .sort({distanceFrom: 'asc'})
            .then((data) => {
            
                console.log("we are searching for the best options now");
                let ResArray = []; //array that will hold the connections
                data.forEach((option) => { //loops through the data and grabs all the connections
                let thisoption  = new ParkingOption();
                //using the set properties for each connection 
                thisoption.setname(option.name);
                thisoption.setspace(option.space);
                thisoption.setdistanceFrom(option.distanceFrom);
                thisoption.setisfaculty(option.isfaculty)
                thisoption.setisresidential(option.isresidential)
                thisoption.setiscommuter(option.iscommuter);
                thisoption.setisvisitor(option.isvisitor);

                //pushes all information into the array
                ResArray.push(thisoption);
            });

            //resolve with the array 
            resolve(ResArray);            
        })
                  //catches any errors if they happen
        .catch((err) => {
            return reject(err);
                });
            });
        
    }

    DecksHourly(){
        return new Promise((resolve, reject) => {
            ParkingHours.find({hour: 1})
            .then((data) => {
                
                console.log("we are listing all decks within the hour");
                let HourArray = []; //array that will hold the connections
                data.forEach((option) => { //loops through the data and grabs all the connections
                let thishour  = new Hours();
                //using the set properties for each connection 
                thishour.setname(option.name);
                thishour.sethour(option.hour)
                thishour.setpercentfull(option.percentFull);


                //pushes all information into the array
                HourArray.push(thishour);
                
            });
            //resolve with the array 
            resolve(HourArray);            
        })
                  //catches any errors if they happen
        .catch((err) => {
            return reject(err);
                });
            });
        
    }
    
}

//export 
module.exports = Parking;
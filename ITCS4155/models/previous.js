class Previous {
    constructor(ID, userID, date, time, building){ //constructor needed to hold the data for the user
    this._ID = ID;
    this._userID = userID;
    this._date = date;
    this._time = time;
    this._building = building;

    }//creates the class that will be used for the previous destinations page

    
//get methods that will be used in the future
    getID(){
        return this._ID; //gets the ID of the element in the previous destination table
    } 
    getuserID(){
        return this._userID; //gets the uiser id
    }
    getdate(){
        return this._date; //gets the fday
    }

    gettime(){
        return this._time; //gets the time
    }
    getbuilding(){
        return this._building; //gets the building 
    }

//set methods that will be used in the future
    setID(theID){
        this._ID = theID; //sets the id of the element in the previous destination table
    }

    setuserID(theuseID){
        this._userID = theuseID; //sets the id the user
    }

    setdate(thedate){
        this._date = thedate; //sets the first name of the user
    }
 

    settime(thetime){
        this._time = thetime; //sets the email of the user
    }

    setbuilding(thebuild){
        this._building = thebuild;
    }

}

//exports the class
module.exports = Previous;
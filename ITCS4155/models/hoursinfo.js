class HoursInfo {
    constructor(name, hour, percentFull){ //constructor needed to hold the data for the user
    this._name = name;
    this._hour = hour
    this._percentFull = percentFull;
 
    }//creates the class that will be used to create the user's info

    
//get methods that will be used in the future
    getname(){
        return this._name; //gets the userID
    } 
    gethour(){
        return this._hour; //gets the address of user
    }
    getpercentFull(){
        return this._percentFull; //gets the first name of user
    }



//set methods that will be used in the future
    setname(thename){
        this._name = thename; //sets the id of the user
    }

    sethour(thehour){
        this._hour = thehour; //sets the classification of the user
    }

    setpercentfull(thepercent){
        this._percentFull = thepercent //sets the first name of the user
    }
 

}

//exports the class
module.exports = HoursInfo;
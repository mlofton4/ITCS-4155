class NextClass {
    constructor(ID, name, day, time, building, hour){ //constructor needed to hold the data for the user
    this._ID = ID;
    this._name = name;
    this._day = day;
    this._time = time;
    this._building = building;
    this._hour = hour;
    }//creates the class 

    
//get methods that will be used in the future
    getID(){
        return this._ID; //gets the userID
    } 
    getname(){
        return this._name; //gets the name of the class
    }
    getday(){
        return this._day; //gets the day of the class
    }

    gettime(){
        return this._time; //gets the time of the class
    }
    getbuilding(){
        return this._building; //gets the building of the class
    }
    gethour(){
        return this._hour; //gets the hour of the class
    }


//set methods that will be used in the future
    setID(theID){
        this._ID = theID; //sets the id of the user
    }

    setname(thename){
        this._name = thename; //sets the name of the class
    }

    setday(theday){
        this._day = theday; //sets the day of the class
    }
 

    settime(thetime){
        this._time = thetime; //sets the time of the class
    }

    setbuilding(thebuilding){
        this._building = thebuilding; //sets the building of the class
    }
    
    sethour(thehour){
        this._hour = thehour; //sets the hour of the class 
    }

}

//exports the class
module.exports = NextClass;
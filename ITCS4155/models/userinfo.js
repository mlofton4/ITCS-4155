class UserInfo {
    constructor(ID, classification, firstname, email , username, password){ //constructor needed to hold the data for the user
    this._ID = ID;
    this.classification = classification;
    this._firstname = firstname;
    this._email = email;
    this._username = username;
    this._password = password;
    }//creates the class that will be used to create the user's info

    
//get methods that will be used in the future
    getID(){
        return this._ID; //gets the userID
    } 
    getclassification(){
        return this._classification; //gets the address of user
    }
    getfirstname(){
        return this._firstname; //gets the first name of user
    }

    getemail(){
        return this._email; //gets the email of user
    }
    getusername(){
        return this._username; //gets the state from the user
    }
    getpassword(){
        return this._password; //gets the country of the user
    }


//set methods that will be used in the future
    setID(theID){
        this._ID = theID; //sets the id of the user
    }

    setClass(theclass){
        this._classification = theclass; //sets the classification of the user
    }

    setfirstname(thefirstname){
        this._firstname = thefirstname; //sets the first name of the user
    }
 

    setemail(theemail){
        this._email = theemail; //sets the email of the user
    }

    setusername(theuse){
        this._username = theuse;
    }
    
    setpassword(pass){
        this._password = pass; //sets the city of the user
    }

}

//exports the class
module.exports = UserInfo;
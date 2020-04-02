class UserInfo {
    constructor(ID, classification, firstname, lastname, address, phone, email, password){ //constructor needed to hold the data for the user
    this._ID = ID;
    this.classification = classification;
    this._firstname = firstname;
    this._lastname = lastname;
    this._address = address;
    this._phone = phone;
    this._email = email;
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
    getlastname(){
        return this._lastname; //gets the last name of user
    }
    getaddress(){
        return this._address; //gets the address of user
    }
    getphone(){
        return this._phone; //gets the state from the user
    }
    getemail(){
        return this._email; //gets the email of user
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
    
    setlastname(thelastname){
        this._lastname = thelastname; //sets the last name of the user
    }

    setaddress(add){
        this._address = add; //sets the first address of the user
    }

    setphone(thenum){
        this._phone = thenum;
    }

    setemail(theemail){
        this._email = theemail; //sets the email of the user
    }
    
    setpassword(pass){
        this._password = pass; //sets the city of the user
    }

}

//exports the class
module.exports = UserInfo;
class Parking {
    constructor(name, space, distanceFrom, isfaculty, isresidential, iscommuter, isvisitor){//constuctor that will hold the parking information
    this._name = name;
    this._space = space;
    this._distanceFrom = distanceFrom;
    this._isfaculty = isfaculty;
    this._isresidential = isresidential;
    this._iscommuter = iscommuter;
    this._isvisitor = isvisitor;
 



    }
//get methods that will be used in the future
  
    getname(){
        return this._name; //gets the name of the parking deck
    } 
    getspace(){
        return this._space; //gets the space avaiabile of the parking deck
    }
    getdistanceFrom(){
        return this._distanceFrom; //gets the ranking of the parking deck 
    }
    getisfaculty(){ //gets whether the parking deck is for faculty
        return this._isfaculty;
    }
    getisresidential(){ //gets whether the parking deck is for residential
        return this._isresidential;
    }
    getiscommuter(){ //gets whether the parking deck is for commuters
        return this._iscommuter;
    }
    getisvisitor(){ //gets whether the parking deck is for visitors
        return this._isvisitor;
    }
    


  
    

//set methods that will be used in the future

    setname(thename){
        this._name= thename; //sets the name of the parking lot/garage
    }

    setspace(thespace){
        this._space = thespace; //sets the space avaiable of the parking lot/garage
    }
    setdistanceFrom(thedistance){ //sets the distance ranking for the parking garage
        this._distanceFrom = thedistance;
    }
    setisfaculty(F){ //sets whether the parking deck is for faculty
        this._isfaculty = F
    }
    setisresidential(R){//sets whether the parking deck is for residential
        this._isresidential = R;
    }
    setiscommuter(C){//sets whether the parking deck is for commuter
        this._iscommuter = C;
    }
    setisvisitor(V){//sets whether the parking deck is for visitor
        this._isvisitor = V;
    }


}

//exports the class
module.exports = Parking;
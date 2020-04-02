let ParkingOption = require('../models/parking');


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

const ReturnArray = [];
const FinalArray = [];

//console.log(connections);
class Parking {

    //get Distance function
    CheckDistance(building){
        switch(building){
            case "woodward":
                ParkingOptions[0]._distanceFrom = 4;
                ParkingOptions[1]._distanceFrom = 5;
                ParkingOptions[2]._distanceFrom = 8;
                ParkingOptions[3]._distanceFrom = 9;
                ParkingOptions[4]._distanceFrom = 10;
                ParkingOptions[5]._distanceFrom = 11;
                ParkingOptions[6]._distanceFrom = 6;
                ParkingOptions[7]._distanceFrom = 7;
                ParkingOptions[8]._distanceFrom = 1;
                ParkingOptions[9]._distanceFrom = 2;
                ParkingOptions[10]._distanceFrom = 3;
                break;
            case "chhs":
                ParkingOptions[0]._distanceFrom = 4;
                ParkingOptions[1]._distanceFrom = 5;
                ParkingOptions[2]._distanceFrom = 8;
                ParkingOptions[3]._distanceFrom = 9;
                ParkingOptions[4]._distanceFrom = 10;
                ParkingOptions[5]._distanceFrom = 11;
                ParkingOptions[6]._distanceFrom = 6;
                ParkingOptions[7]._distanceFrom = 7;
                ParkingOptions[8]._distanceFrom = 1;
                ParkingOptions[9]._distanceFrom = 2;
                ParkingOptions[10]._distanceFrom = 3;
                break;
            case "coed":
                ParkingOptions[0]._distanceFrom = 4;
                ParkingOptions[1]._distanceFrom = 5;
                ParkingOptions[2]._distanceFrom = 8;
                ParkingOptions[3]._distanceFrom = 9;
                ParkingOptions[4]._distanceFrom = 10;
                ParkingOptions[5]._distanceFrom = 11;
                ParkingOptions[6]._distanceFrom = 6;
                ParkingOptions[7]._distanceFrom = 7;
                ParkingOptions[8]._distanceFrom = 1;
                ParkingOptions[9]._distanceFrom = 2;
                ParkingOptions[10]._distanceFrom = 3;
                break;
            case "atkins":
                ParkingOptions[0]._distanceFrom = 1;
                ParkingOptions[1]._distanceFrom = 2;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 4;
                ParkingOptions[4]._distanceFrom = 5;
                ParkingOptions[5]._distanceFrom = 6;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 9;
                ParkingOptions[8]._distanceFrom = 7;
                ParkingOptions[9]._distanceFrom = 8;
                ParkingOptions[10]._distanceFrom = 3;
                break;
            case "bioinformatic":
                ParkingOptions[0]._distanceFrom = 5;
                ParkingOptions[1]._distanceFrom = 6;
                ParkingOptions[2]._distanceFrom = 1;
                ParkingOptions[3]._distanceFrom = 9;
                ParkingOptions[4]._distanceFrom = 10;
                ParkingOptions[5]._distanceFrom = 11;
                ParkingOptions[6]._distanceFrom = 7;
                ParkingOptions[7]._distanceFrom = 8;
                ParkingOptions[8]._distanceFrom = 2;
                ParkingOptions[9]._distanceFrom = 3;
                ParkingOptions[10]._distanceFrom = 4;
                break;
            case "barnard":
                ParkingOptions[0]._distanceFrom = 4;
                ParkingOptions[1]._distanceFrom = 5;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 1;
                ParkingOptions[4]._distanceFrom = 2;
                ParkingOptions[5]._distanceFrom = 3;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 7;
                ParkingOptions[8]._distanceFrom = 8;
                ParkingOptions[9]._distanceFrom = 9;
                ParkingOptions[10]._distanceFrom = 6;
                console.log(ParkingOptions[5]);
                break;
            case "burson":
                ParkingOptions[0]._distanceFrom = 3;
                ParkingOptions[1]._distanceFrom = 4;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 6;
                ParkingOptions[4]._distanceFrom = 7;
                ParkingOptions[5]._distanceFrom = 8;
                ParkingOptions[6]._distanceFrom = 9;
                ParkingOptions[7]._distanceFrom = 10;
                ParkingOptions[8]._distanceFrom = 1;
                ParkingOptions[9]._distanceFrom = 2;
                ParkingOptions[10]._distanceFrom = 5;
                break;
            case "cameron":
                ParkingOptions[0]._distanceFrom = 3;
                ParkingOptions[1]._distanceFrom = 4;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 6;
                ParkingOptions[4]._distanceFrom = 7;
                ParkingOptions[5]._distanceFrom = 8;
                ParkingOptions[6]._distanceFrom = 9;
                ParkingOptions[7]._distanceFrom = 10;
                ParkingOptions[8]._distanceFrom = 1;
                ParkingOptions[9]._distanceFrom = 2;
                ParkingOptions[10]._distanceFrom = 5;
                break;
            case "colvard":
                ParkingOptions[0]._distanceFrom = 1;
                ParkingOptions[1]._distanceFrom = 2;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 4;
                ParkingOptions[4]._distanceFrom = 5;
                ParkingOptions[5]._distanceFrom = 6;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 7;
                ParkingOptions[8]._distanceFrom = 8;
                ParkingOptions[9]._distanceFrom = 9;
                ParkingOptions[10]._distanceFrom = 3;
                break;
            case "cone":
                ParkingOptions[0]._distanceFrom = 1;
                ParkingOptions[1]._distanceFrom = 2;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 4;
                ParkingOptions[4]._distanceFrom = 5;
                ParkingOptions[5]._distanceFrom = 6;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 9;
                ParkingOptions[8]._distanceFrom = 7;
                ParkingOptions[9]._distanceFrom = 8;
                ParkingOptions[10]._distanceFrom = 3;
                break;
            case "denny":
                ParkingOptions[0]._distanceFrom = 4;
                ParkingOptions[1]._distanceFrom = 5;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 1;
                ParkingOptions[4]._distanceFrom = 2;
                ParkingOptions[5]._distanceFrom = 3;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 7;
                ParkingOptions[8]._distanceFrom = 8;
                ParkingOptions[9]._distanceFrom = 9;
                ParkingOptions[10]._distanceFrom = 6;
                break;
            case "duke":
                ParkingOptions[0]._distanceFrom = 5;
                ParkingOptions[1]._distanceFrom = 6;
                ParkingOptions[2]._distanceFrom = 1;
                ParkingOptions[3]._distanceFrom = 9;
                ParkingOptions[4]._distanceFrom = 10;
                ParkingOptions[5]._distanceFrom = 11;
                ParkingOptions[6]._distanceFrom = 7;
                ParkingOptions[7]._distanceFrom = 8;
                ParkingOptions[8]._distanceFrom = 2;
                ParkingOptions[9]._distanceFrom = 3;
                ParkingOptions[10]._distanceFrom = 4;
                break;
            case "epic":
                ParkingOptions[0]._distanceFrom = 5;
                ParkingOptions[1]._distanceFrom = 6;
                ParkingOptions[2]._distanceFrom = 1;
                ParkingOptions[3]._distanceFrom = 9;
                ParkingOptions[4]._distanceFrom = 10;
                ParkingOptions[5]._distanceFrom = 11;
                ParkingOptions[6]._distanceFrom = 7;
                ParkingOptions[7]._distanceFrom = 8;
                ParkingOptions[8]._distanceFrom = 3;
                ParkingOptions[9]._distanceFrom = 4;
                ParkingOptions[10]._distanceFrom = 2;
                break;
            case "fret":
                ParkingOptions[0]._distanceFrom = 4;
                ParkingOptions[1]._distanceFrom = 5;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 1;
                ParkingOptions[4]._distanceFrom = 2;
                ParkingOptions[5]._distanceFrom = 3;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 9;
                ParkingOptions[8]._distanceFrom = 7;
                ParkingOptions[9]._distanceFrom = 8;
                ParkingOptions[10]._distanceFrom = 6;
                break;
            case "friday":
                ParkingOptions[0]._distanceFrom = 4;
                ParkingOptions[1]._distanceFrom = 5;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 1;
                ParkingOptions[4]._distanceFrom = 2;
                ParkingOptions[5]._distanceFrom = 3;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 9;
                ParkingOptions[8]._distanceFrom = 7;
                ParkingOptions[9]._distanceFrom = 8;
                ParkingOptions[10]._distanceFrom = 6;
                break;
            case "garinger":
                ParkingOptions[0]._distanceFrom = 4;
                ParkingOptions[1]._distanceFrom = 5;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 1;
                ParkingOptions[4]._distanceFrom = 2;
                ParkingOptions[5]._distanceFrom = 3;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 9;
                ParkingOptions[8]._distanceFrom = 7;
                ParkingOptions[9]._distanceFrom = 8;
                ParkingOptions[10]._distanceFrom = 6;
                break;
            case "grigg":
                ParkingOptions[0]._distanceFrom = 5;
                ParkingOptions[1]._distanceFrom = 6;
                ParkingOptions[2]._distanceFrom = 1;
                ParkingOptions[3]._distanceFrom = 9;
                ParkingOptions[4]._distanceFrom = 10;
                ParkingOptions[5]._distanceFrom = 11;
                ParkingOptions[6]._distanceFrom = 7;
                ParkingOptions[7]._distanceFrom = 8;
                ParkingOptions[8]._distanceFrom = 2;
                ParkingOptions[9]._distanceFrom = 3;
                ParkingOptions[10]._distanceFrom = 4;
                break;
            case "belk":
                ParkingOptions[0]._distanceFrom = 2;
                ParkingOptions[1]._distanceFrom = 3;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 7;
                ParkingOptions[4]._distanceFrom = 8;
                ParkingOptions[5]._distanceFrom = 9;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 4;
                ParkingOptions[8]._distanceFrom = 5;
                ParkingOptions[9]._distanceFrom = 6;
                ParkingOptions[10]._distanceFrom = 1;
                break;
            case "band":
                ParkingOptions[0]._distanceFrom = 4;
                ParkingOptions[1]._distanceFrom = 5;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 1;
                ParkingOptions[4]._distanceFrom = 2;
                ParkingOptions[5]._distanceFrom = 3;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 6;
                ParkingOptions[8]._distanceFrom = 8;
                ParkingOptions[9]._distanceFrom = 9;
                ParkingOptions[10]._distanceFrom = 7;
                break;
            case "kennedy":
                ParkingOptions[0]._distanceFrom = 4;
                ParkingOptions[1]._distanceFrom = 5;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 1;
                ParkingOptions[4]._distanceFrom = 2;
                ParkingOptions[5]._distanceFrom = 3;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 7;
                ParkingOptions[8]._distanceFrom = 8;
                ParkingOptions[9]._distanceFrom = 9;
                ParkingOptions[10]._distanceFrom = 6;
                break;
            case "macy":
                ParkingOptions[0]._distanceFrom = 4;
                ParkingOptions[1]._distanceFrom = 5;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 1;
                ParkingOptions[4]._distanceFrom = 2;
                ParkingOptions[5]._distanceFrom = 3;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 7;
                ParkingOptions[8]._distanceFrom = 8;
                ParkingOptions[9]._distanceFrom = 9;
                ParkingOptions[10]._distanceFrom = 6;
                break;
            case "mceniry":
                ParkingOptions[0]._distanceFrom = 6;
                ParkingOptions[1]._distanceFrom = 7;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 1;
                ParkingOptions[4]._distanceFrom = 2;
                ParkingOptions[5]._distanceFrom = 3;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 9;
                ParkingOptions[8]._distanceFrom = 4;
                ParkingOptions[9]._distanceFrom = 5;
                ParkingOptions[10]._distanceFrom = 8;
                break;
            case "memorial":
                ParkingOptions[0]._distanceFrom = 1;
                ParkingOptions[1]._distanceFrom = 2;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 5;
                ParkingOptions[4]._distanceFrom = 6;
                ParkingOptions[5]._distanceFrom = 7;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 4;
                ParkingOptions[8]._distanceFrom = 8;
                ParkingOptions[9]._distanceFrom = 9;
                ParkingOptions[10]._distanceFrom = 3;
                break;
            case "robinson":
                ParkingOptions[0]._distanceFrom = 4;
                ParkingOptions[1]._distanceFrom = 5;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 1;
                ParkingOptions[4]._distanceFrom = 2;
                ParkingOptions[5]._distanceFrom = 3;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 6;
                ParkingOptions[8]._distanceFrom = 8;
                ParkingOptions[9]._distanceFrom = 9;
                ParkingOptions[10]._distanceFrom = 7;
                break;
            case "rowe":
                ParkingOptions[0]._distanceFrom = 1;
                ParkingOptions[1]._distanceFrom = 2;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 4;
                ParkingOptions[4]._distanceFrom = 5;
                ParkingOptions[5]._distanceFrom = 6;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 7;
                ParkingOptions[8]._distanceFrom = 8;
                ParkingOptions[9]._distanceFrom = 9;
                ParkingOptions[10]._distanceFrom = 3;
                break;
            case "smith":
                ParkingOptions[0]._distanceFrom = 3;
                ParkingOptions[1]._distanceFrom = 4;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 5;
                ParkingOptions[4]._distanceFrom = 6;
                ParkingOptions[5]._distanceFrom = 7;
                ParkingOptions[6]._distanceFrom = 9;
                ParkingOptions[7]._distanceFrom = 10;
                ParkingOptions[8]._distanceFrom = 1;
                ParkingOptions[9]._distanceFrom = 2;
                ParkingOptions[10]._distanceFrom = 8;
                break;
            case "storrs":
                ParkingOptions[0]._distanceFrom = 4;
                ParkingOptions[1]._distanceFrom = 5;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 1;
                ParkingOptions[4]._distanceFrom = 2;
                ParkingOptions[5]._distanceFrom = 3;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 6;
                ParkingOptions[8]._distanceFrom = 8;
                ParkingOptions[9]._distanceFrom = 9;
                ParkingOptions[10]._distanceFrom = 7;
                break;
            case "win":
                ParkingOptions[0]._distanceFrom = 4;
                ParkingOptions[1]._distanceFrom = 5;
                ParkingOptions[2]._distanceFrom = 11;
                ParkingOptions[3]._distanceFrom = 1;
                ParkingOptions[4]._distanceFrom = 2;
                ParkingOptions[5]._distanceFrom = 3;
                ParkingOptions[6]._distanceFrom = 10;
                ParkingOptions[7]._distanceFrom = 9;
                ParkingOptions[8]._distanceFrom = 7;
                ParkingOptions[9]._distanceFrom = 8;
                ParkingOptions[10]._distanceFrom = 6;
                break;
        }
    }

   SortOptions(){
       //will look into finding a cleaner way of doing this if time allows
       for(let m=0; m < ParkingOptions.length; m++){
           if(ParkingOptions[m]._distanceFrom == 1){
               ReturnArray.push(ParkingOptions[m]);
           }
        }
        for(let m=0; m < ParkingOptions.length; m++){
            if(ParkingOptions[m]._distanceFrom == 2){
                ReturnArray.push(ParkingOptions[m]);
            }
        }
        for(let m=0; m < ParkingOptions.length; m++){
            if(ParkingOptions[m]._distanceFrom == 3){
                ReturnArray.push(ParkingOptions[m]);
            }
        }
        for(let m=0; m < ParkingOptions.length; m++){
            if(ParkingOptions[m]._distanceFrom == 4){
                ReturnArray.push(ParkingOptions[m]);
            }
        }
        for(let m=0; m < ParkingOptions.length; m++){
            if(ParkingOptions[m]._distanceFrom == 5){
                ReturnArray.push(ParkingOptions[m]);
            }
        }
        for(let m=0; m < ParkingOptions.length; m++){
            if(ParkingOptions[m]._distanceFrom == 6){
                ReturnArray.push(ParkingOptions[m]);
            }
        }
        for(let m=0; m < ParkingOptions.length; m++){
            if(ParkingOptions[m]._distanceFrom == 7){
                ReturnArray.push(ParkingOptions[m]);
            }
        }
        for(let m=0; m < ParkingOptions.length; m++){
            if(ParkingOptions[m]._distanceFrom == 8){
                ReturnArray.push(ParkingOptions[m]);
            }
        }
        for(let m=0; m < ParkingOptions.length; m++){
            if(ParkingOptions[m]._distanceFrom == 9){
                ReturnArray.push(ParkingOptions[m]);
            }
        }
        for(let m=0; m < ParkingOptions.length; m++){
            if(ParkingOptions[m]._distanceFrom == 10){
                ReturnArray.push(ParkingOptions[m]);
            }
        }
        for(let m=0; m < ParkingOptions.length; m++){
            if(ParkingOptions[m]._distanceFrom == 11){
                ReturnArray.push(ParkingOptions[m]);
            }
        }
         
          
        return ReturnArray;

}

 
    


    CheckClass(classification){
        for(let k = 0; k < ReturnArray.length; k++){
            if(classification == 'faculty'){
                if(ReturnArray[k]._isfaculty == 'yes'){
                    FinalArray.push(ReturnArray[k]);
                }
            }
            else if(classification == 'residential'){
                if(ReturnArray[k]._isresidential == 'yes'){
                    FinalArray.push(ReturnArray[k]);
                }
            }
            else if(classification == 'commuter'){
                if(ReturnArray[k]._iscommuter  == 'yes'){
                    FinalArray.push(ReturnArray[k]);
                }
            }
            else{
                if(ReturnArray[k]._isvisitor  == 'yes'){
                    FinalArray.push(ReturnArray[k]);
                }
            }
        }

            
        return FinalArray;
    }

    reset(){
        ReturnArray.length = 0;
        FinalArray.length = 0;
    }

    getParkingOptions(){
        return ParkingOptions;
    }
}

//export 
module.exports = Parking;
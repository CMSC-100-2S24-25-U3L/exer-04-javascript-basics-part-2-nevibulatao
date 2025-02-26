import validator from "validator";
import { v4 as uuidGen } from "uuid";
import {appendFileSync} from 'node:fs';

function generateUniqueID(firstName, lastName) {
    var UID = '';

    firstName = firstName[0].toLowerCase(); //get first letter of first name and convert to lowercase
    lastName = lastName.toLowerCase(); //convert last name to lowercase
 
    //generate alphanum
    var alphaNum = uuidGen();
    alphaNum = alphaNum.slice(0,8); //trim alphanum

    //concatenate first name, last name and alphanum
    UID = firstName + lastName + alphaNum;
    
    //return ID
    return UID;
}

function addAccount(userInfo){
    // var for adding to file
    var appendToFile = '';


    // check if necessary fields are provided
    if (userInfo.length < 4){
        console.log( "Please make sure all necessary information is provided");
        return false;
    }

    //iterate through the array
    for (var x = 0; x<3; x++){
        //check if type string and not empty
        if (typeof userInfo[x] === 'string' && userInfo[x].length === 0){
            console.log("Invalid input! One of the credentials is an empty string!");
            return false;
        }
        // check if null
        else if (typeof userInfo[x] === 'null'){
            console.log("Invalid input! One of the credentials is null!");
            return false;
        }
        //check if undefined
        else if (typeof userInfo[x] === 'undefined'){
            console.log("Invalid input! One of the credentials is undefined!");
            return false;
        }
    }

    // check email format
    if (validator.isEmail(userInfo[2])==false){
        console.log("Invalid input! Invalid email!");
        return false;
    }

    //check age
    if(userInfo[3] < 18){
        console.log("Invalid input! User is underage!");
        return false;
    }

    // generate UID and push to userInfo
    userInfo.push(generateUniqueID(userInfo[0], userInfo[1]));

    // append to file
    appendToFile = userInfo.join(",") + "\n";
    appendFileSync('users.txt', appendToFile);

    return true;
}

export {addAccount};

// test cases
// console.log(generateUniqueID("John", "Doe")); // jdoe1234
//console.log(addAccount(["John", "doe", "jdoe@w3c.com", 18]));

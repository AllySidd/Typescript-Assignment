
// Write a program that creates Objects containing these items.

// Datatype of person object.
interface person {
    age : number,
    name : string,
    nationaliy : string,
    Student : Boolean
} 
// person object.
let person :person = {
    age : 32 ,
    name : 'Muhammad Ali Siddiqui' ,
    nationaliy : 'Pakistan' ,
    Student : true  
}
// Print person.
console.log(person);

// DataType of car object.
interface Car {
    maker : string,
    color : string,
    automatic : boolean
}
// Car Object.
let Car = {
    maker : 'Toyota',
    color : 'White',
    automatic : true
}


// Print person.
console.log(Car);
const prompt = require('prompt-sync')({sigint: true});

let validWeight = true;

let weight = Number(prompt('Enter your weight: '));
if(isNaN(weight)){
    console.log("Error!");
    validWeight = false;

}
if(validWeight){
console.log("Please enter the number of the planet you will be traveling to using the following system.  1-Venus, 2-Mars, 3-Jupiter, 4-Saturn, 5-Uranus, 6-Neptune:");
let planet = Number(prompt("/"));
if(planet === 1){

    console.log(`Your weight on Venus is ${weight * 0.78}`);

}else if(planet === 2) {

    console.log(`Your weight on Mars is ${weight * 0.39}`);

}else if(planet=== 3) {

    console.log(`Your weight on Jupiter is ${weight * 2.65}`);

}else if(planet === 4){

    console.log(`Your weight on Saturn is ${weight * 1.17}`);

}else if(planet === 5){

    console.log(`Your weight on Uranus is ${weight * 1.05}`);

}else if(planet === 6){

    console.log(`Your weight on Neptune is ${weight * 1.23}`);

}else {
    
    console.log("Error!");
}
}
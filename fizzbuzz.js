const prompt = require('prompt-sync')({sigint: true});

let number = Number(prompt(`Enter a number: `));

let remainder1 = number % 3;
let remainder2 = number % 5;

if(remainder1 === 0){
    if(remainder2 === 0 ){
        console.log("Fizzbuzz")
    }else{
        console.log(`Fizz`);
    }
}else if(remainder2 === 0){
    console.log(`Buzz`);
}
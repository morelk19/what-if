const prompt = require('prompt-sync')({sigint: true});

let number = Number(prompt(`Enter a class size: `));

rem1 = number % 3;
rem2 = number % 2;
rem3 = rem1 % rem2;
groupOfThree =  Math.floor(number / 3);
groupOfTwo = Math.floor(number / 2);

function printGroups(three, two){
    console.log(`Your groups of three should be ${three} and your groups of two should be ${two}`);
}

if(rem1=== 0){
    printGroups(groupOfThree, groupOfTwo);
}

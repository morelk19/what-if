const prompt = require('prompt-sync')({sigint: true});

let dayOfTheWeek = Number(prompt(`Please enter a number that corresponds to a day of the week:
| number | day |
| --- | --- |
| 1 | Monday |
| 2 | Tuesday |
| 3 | Wednesday |
| 4 | Thursday |
| 5 | Friday |
| 6 | Saturday |
| 7 | Sunday |
| anything else | "error" |`));

if(dayOfTheWeek === 1){

    console.log("Monday");

}else if(dayOfTheWeek === 2) {

    console.log("Tuesday");

}else if(dayOfTheWeek === 3) {

    console.log("Wednesday");

}else if(dayOfTheWeek === 4){

    console.log("Thursday");

}else if(dayOfTheWeek === 5){

    console.log("Friday");

}else if(dayOfTheWeek === 6){

    console.log("Saturday");

}else if(dayOfTheWeek === 7){

    console.log("Sunday");

} else {
    
    console.log("Error!");
}
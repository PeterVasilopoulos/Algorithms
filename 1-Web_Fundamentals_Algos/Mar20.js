// var floor = Math.floor(1.8);
// var ceiling = Math.ceil( Math.PI );
// var random = Math.random();
    
// console.log(floor);
// console.log(ceiling);
// console.log(random);

// Math.random() returns a number between 0 (inclusive) and 1 (exclusive)

function d6() { //roll a six sided die
    var roll = Math.ceil(Math.random() * 6);
    // your code here
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);




/*
Using the following array, write a function that will answer all of our questions by randomly choosing a response
make it so your function will work even if we add or remove items from this list
*/
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function consult(arr){
    //Your code here
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

console.log(consult(lifesAnswers));
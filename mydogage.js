#mydogage.js



// A JavaScript program to calculate the human dog equivalent age

// My Age
let myAge = 59;

//aging for first 2 dog years is 10.5 per year human years
let earlyYears = 2;
earlyYears = earlyYears * 10.5;

//  remove two years from age and call that laterYears
let laterYears = myAge - 2;

// aging for later years is 4 dog to 1 human
laterYears *= 4;


//check for correct values
console.log(laterYears);
console.log(earlyYears);


let myAgeInDogYears = laterYears + earlyYears;


//create a variable called myName and set it equal to my name in lowercase letters
let myName = "Mike";
myName = myName.toLowerCase();
console.log(myName);


// console log an announcement

console.log('My name is ' + myName + '. I am ' + myAge + ' years old in human years which is ' + myAgeInDogYears + ' years old in dog years.')

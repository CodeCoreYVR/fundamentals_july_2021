// if / else if / else statement

// conditionals control the flow of the program

// the syntax for an if statement:

// Can be stand-alone
if (expression / condition) {
  // code block that will only
  // execute if the condition is truthy
}

// You can write it on one line if there's only one line of code in the code block
// without braces. It's still treated as a code block.
if(expression / condition) {  "single line of code" } // single line of code

// With an else clause:
if (expression / condition) {
  // code block that will only execute if the condition is truthy
} else {
  // code that will run if the condition is falsy
}

// Whenever you have an else clause, a block of code will always run
// because the else clause acts as a default
// No more than one code block will run per statement, only the first
// clause that was truthy will run
if (expression/ condition) {
  // code block that will only execute if the condition is truthy
} else if (expression/ condition) {
  // code that will run if the else if clause is truthy
  // but it will not run if any previous if or else if conditions  were truthy
} else {
  // code will run if all previous conditions were falsy 
}

// Car age game
const year = parseInt(prompt("What year is your car?"))

if (year < 2010) { // -Infinity - 2009
  console.log("Your car is very old");
} else if (year < 2015) {
  console.log("Your car is old");
} else if (year < 2021) {
  console.log("Your car is new");
} else { // 2022 - Infinity
  console.log("Your car is future");
}


// Guess random number between 1-10 game
const randomNum = Math.ceil(Math.random() * 10);

let guess = parseInt(prompt("guess a number between 1 and 10"))

if (randomNum === guess) {
  console.log("You won!");
} else {
  console.log("try again lol");
}
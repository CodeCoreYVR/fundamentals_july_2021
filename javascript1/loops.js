// while loop

// Loops are used to run a piece of code many times

// Initialize value e.g. let i = 1
while ( condition / expression ) {
  // code block will run while the condition is true
  // after each iteration we should change that initializer
  // e.g. i++

  // after each iteration, the while loop will check the condition again
  // to see if it should run again

}

// for loop
for (initialization; condition ; afterthought/iterator) {
  // code block will run as long as the condition is truthy
}

// Log the numbers from 1 to 100 to the console:
let i = 1
while (i <= 100) {
  console.log(i)
  i++
}

// The above while loop behaves like the following for loop:
// But i is not scoped to the parent scope like in the while loop,
// but only scoped to the current iteration
for(let i = 1; i <= 100; i++){
  console.log(i);
}

// If there is only one line of code in the for/while loop,
// you can write it without braces and on the same line:
for(let i = 1; i <= 100; i++) console.log(i)

// Log all even numbers from 0 to 100 to the console
let i = 0 
while (i <= 100) {
  if(i % 2 === 0) {
    console.log(i);
  }
  i++
}
// or
let i = 0 
while(i <= 100) {
  i += 2
}
// or
for (let i = 0; i <= 100; i += 2) console.log(i);

// The break statement breaks the entire loop and continues on with the program
// Below, only 1, 2, 3 are printed even though the condition goes up to 10
for(let i = 1; i <= 10; i++) {
  console.log(i);
  if (i % 3 === 0) {
    break
  }
}

// The continue statement will terminate the current iteration, 
// ignoring any code after the continue statement and moves on to
// the next iteration
// Print the numbers that are between 0 and 100 that are divisible by 3
for (let i = 0; i <= 100; i++) {
  if (i % 3 !== 0) {
    continue
  }
  console.log(i);
}

// A do...while loop will run once before checking the condition
do {
  console.log("this will run once");
} while (false)

while (false) {
  console.log("this will not run");
}
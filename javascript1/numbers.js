// Primitive Data Types
// Number
// String
// Boolean
// null
// undefined

// Examples
5 - 5;
Infinity
  //
-Infinity;
Nan; // often a return value where a number argument was expected
// but we didn't get one

// Arithmetic operators

2 + 4; // -> 6
2 - 4; // -> -2
2 * 4; // -> 8
2 / 4; // -> 0.5

// Raise to the power
2 ** 4; // -> 16

// module divides the left operand by the right operand and returns the remainder
9 % 3; // -> 0
10 % 4; // -> 2
2 % 3; // -> 2 (3 goes into 2 zero times and the remainder is 2)

// The math object/library that is built in JS
Math.random(); // this will return a random number between 0 and 1 (not inclusive of 1)
Math.random() * 100; // this will return a random number between 0 and 100 (not inclusive of 100)
Math.floor(2.60131); // -> 2
Math.ceil(2.60131); // -> 3

// Generate a random integer between 0 and 99
// Math.random() * 100 // range is: 0 - 99.99999
Math.floor(Math.random() * 100);

// Generate a random integer between 1 and 100
Math.ceil(Math.random() * 100);
Math.floor(Math.random() * 100) + 1;

// Terminology that I use:
// (): parenthesis
// []: brackets
// {}: braces

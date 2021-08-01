// Declare variable
// {keyword} {variableName}
let letVariable // undefined

// Declare and initialize
// {keyword} {variableName} = {value}
const constVariable = 123

// Difference between const and let
letVariable = 0 // let can be reassigned
constVariable = 1 // Uncaught TypeError: Assignment to constant variable
constVariable++ // Uncaught TypeError: Assignment to constant variable

// If we declare a variable with const, you have to initialize it at the same time
const name // Uncaught SyntaxError: Missing initializer in const declaration

// How to define a string?
'Single quotes'
"Double quotes"
`Back ticks`

// No difference between "" and '' other than escaping the same quote inside with '\'
'You\'re awesome'

// Using back ticks, we can interpolate
`There are ${constVariable} users signed up`

// Only backticks can be used for multiline strings
const multiline = `
  Only back ticks
  allow for
  multiline strings.
`

// The difference between == and ===
// JS will try coerce the operands into the same type of data before comparing
2 == '2' // true

// Using ===, JS will not try to coerce different data types 
2 === '2' // false


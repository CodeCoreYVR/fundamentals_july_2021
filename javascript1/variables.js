// A variable is a container that holds a value
// It has accessibility, name, and a value

// The accessibility is set with one keyword
// const, let, var

// Syntax is as follows:
// {keyword} {variableName} = {value}
const fooBar = "foobar"

// When declaring a variable with "let" without a value,
// the space in memory gets allocated but it's value is undefined
let a
a // undefined

// assign it a value:
// don't use the keyword here because we should only declare a variable
// once in the same scope
a = "a value"

// Declare a variable that can't be reassigned/rebinded:
const num = 5
num = 6 // TypeError

// Declare a variable that can be reassigned:
var name = "joe"
let isTrue = true

// Conventions: 
// camelCase (this the convention in JS)
const camelCase = 'value'
// PascalCase (used for JS classes or constructors)
const PascalCase ="value"
// snake_case
const snake_case = "value"
// SCREAMING_SNAKE_CASE (used constants in JS)
const SCREAMING_SNAKE_CASE ='value'

// Rules for variable names
// * cannot contain spaces
// * must start with a letter, _ or $
// * may contain digits if it's not the starting character
// * are case-sensitive
// * cannot be a reserved keyword in JS

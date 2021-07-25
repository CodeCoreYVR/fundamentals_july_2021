// Strings

"This is a double quote string"
'I\'m a single quote string'
`This is a backtick string`
"This will go on \n a new line"

// Concatenate strings
"Hello" + "world" // -> "Hello World"
"4" + 5 // -> "45"
5 + "4" // -> "54"

// Only with backticks can you use string interpolation
// If the expression in the ${} is not a string, it will convert to a string
// at runtime and be interpolated as a string
`There are ${3 + 5} students in the room`

// Get the length of a string
"abc".length // -> 3

// Each character in a string has an index which starts at 0
"abc"[0] // -> "a"
"abc"[1] // -> "b"
"abc"[1 + 1] // -> "c"
"abc"[-1] // -> undefined

// We cannot mutate strings
let s = "bobbi"
s[4] = "y"
s // -> "bobbi"

// parse a string into a number
parseInt("123") // -> 123
parseInt("123abc") // -> 123
parseInt("123abc321") // -> 123
parseInt("abc") // -> NaN
parseInt("123.5") // -> 123
parseFloat("123.5") // -> 123.5
Number(true) // -> 1
Number(false) // -> 0

// Remove beginning and trailing spaces
"       hello world        ".trim() // "hello world"



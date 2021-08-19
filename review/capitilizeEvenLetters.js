// Write a function that takes in a string

// Iterate over each character in the string:
  // If the character is even, make it upcased
  // If the character is odd, make it downcased

  // Keep in mind that strings are immutable
  
let hello = "hello"
hello[0] ='j'
hello // -> "hello"

function toWeirdCase(string) {
  let uppercase = true;
  return string
    .replace(/./g, c => {
      const current = uppercase;

      uppercase = c === ' ' ? true : !uppercase;

      return current ? c.toUpperCase() : c.toLowerCase()
    })
}

console.log(toWeirdCase('hello world'));



function toWeirdCase(string) {
  let output = ''

  for (i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      output += string[i].toLowerCase()
    } else {
      output += string[i].toUpperCase()
    }
  }
  console.log(output);
}

console.log(toWeirdCase('hello world'));
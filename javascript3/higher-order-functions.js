// A higher order function is a function that either:
// - takes a function as an argument
// - returns a function

// We expect the argument to be passed to runThree
// to be a function, 'func'
const runThree = (func) => {
  func()
  func()
  func()
}

const sayHi = () => {
  console.log("Hi!");
}

runThree(sayHi)
// Hi!
// Hi!
// Hi!

// Call exercise 
// With arrow functions, if you only have one line of an expression in the code,
// you can write it without {} and that expression will be returned
// In this case, 2 * x is returned even though you don't see the return statement
// You can also optionally omit the () if there's only one parameter
// e.g. (x) => {} because: x => {}
const doubleIt = x => 2 * x

const call = (num, func) => {
  return func(num)
}

call(10, doubleIt) // -> 20

call(10, x => 3 * x) // -> 30
call(10, function(x) {return 3 * x}) // -> 30

call(10.4213143134, Math.floor) // -> 10

const callStretch = (num, func, times) => {
  let output = num
  for (let i = 0; i < times; i++) {
    output = func(output)
  }
  return output
}

callStretch(5, function(x) {
  return x * 2
}, 3)

// Built in array map() method
// When we call map, map will run the callback on every
// element in the array, and the return value for that callback
// will be mapped to a new array as an element
// The parameter "x" represents the current element we're iterating over
[1, 2, 3].map(x => {
  return 2 * x
})
// [2, 4, 6]

// or

[1, 2, 3].map(x => 2 * x) // [2, 4, 6]

function map(arr, cb) {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(cb(arr[i]))
  }
  return output
}
// -> [2]
// -> [2, 4]

map([1, 2, 3], x => 2 * x) // -> [2, 4, 6]

// Stretch: Array of functions
const functions = [
  function(x) {return x * 2},
  x => x - 1,
  (x) => x ** 2,
]

function mapStretch(arr, arrayOfFuncs) {
  const output = []

  for (let i = 0; i < arr.length; i++) {
    // For each iteration, arr[i] is the current element
    // Iterate over the arrayOfFuncs and call it on the current element

    let element = arr[i]
    for(let func of arrayOfFuncs) {
      element = func(element)
    }
    output.push(element)
  }
  return output
}

mapStretch([1, 2, 3], functions)

// Array of squares
map([1,2,3,4,5,6,7,8,9], num => num ** 2)

// Array of string lengths
map(
  ["hello", "data", "eat cheese", "walking"],
  function(string) {return string.length}
)

// Array.forEach()
// It performs a piece of code stored in a callback on each
// element of the array that it was called on and returns undefined
// Very similar to the for loop, the following does the same thing
[1,2,3].forEach(i => {
  console.log(i);
})

for (let i of [1,2,3]) {
  console.log(i);
}

// Rewrite map using forEach
function map(arr, cb) {
  const output = [];

  // for (let i = 0; i < arr.length; i++) {
    // output.push(cb(arr[i]))
  // }

  arr.forEach(element => {
    output.push(cb(element))
  })
  return output
}

map([1,2,3], x => 2 * x) // [2, 4, 6]
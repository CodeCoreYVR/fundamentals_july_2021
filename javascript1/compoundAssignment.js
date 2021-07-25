// Compound assignment operators:
// += -= *= /== %== **==

let num = 0 
num = num + 1 // -> 1
num += 1 // -> 2
num *= 5 // -> 10

num = 0 
console.log(`num is initially: ${num}`);
console.log(`when using preincrement, the value gets increased by one before logging, which changes the value to: ${++num}`);
console.log(`current value of num is ${num}`);
console.log(`when using postincrement, the value gets increased by one after logging, and it displays the current value before adding 1 to num: ${num++}`);
console.log(`current value of num is ${num}`);


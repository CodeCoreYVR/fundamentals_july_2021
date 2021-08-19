for (let i = 0; i < 26; i++) {
  let text = String.fromCharCode(97 + i);
  console.log(text)
}



let i = 1 
while (i <= 26) {
  let letter=(String.fromCharCode(96+i))
  let string = ""
  for (let x = 1; x <= i; x++) {
    string=string+letter
   
  }
  console.log(string)
 i++
}

for (let i = 0; i < 26; i++) {
  console.log(String.fromCharCode(97 + i).repeat(i + 1))
}
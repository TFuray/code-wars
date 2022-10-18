/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/


const test = "Reverse this string, please!"

function reverse(string){
  let newString = []
  let reverseString =[]
  newString = string.split(" ")
  for(let i = 0; i < newString.length; i++){
    if(i % 2 == 0){
      reverseString.push(newString[i])
    }
    else{
      reverseString.push(newString[i].split("").reverse().join(""))
    }
  }
    return reverseString.join(" ").trim() 
}
console.log(reverse(''))
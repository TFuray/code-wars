// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

// Alternate capitalization

// Vowel consonant lexicon

let test = ["abbbracadabra","allottee","assessee"]


// function dup (s) {
//   let newArr = []
//   let final = []
//   s.forEach(el => {
//     for(let i=0;i<el.length;i++){
//         if(el[i] !== el[i+1]){
//         newArr.push(el[i])
//         } 
//     }
//     final.push(newArr.join(','))
//   });
//   return final
// }

function removeDupes (arr) {
  //map -> word - split - filter - join
  return arr.map(word =>
    word
      .split('')
      .filter((l, i, a) => l != a[i - 1])
      .join('')
  )
}


console.log(dup(test))
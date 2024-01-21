//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let str =
  "That's the password: 'PASSWORD 123'!, cried the Special Agent.\nSo I fled."
export const countWords = (str) => {
const regexPattern = /\b(?:[^\w']+'\w+|[^\w'\s])*\b/g

  const result = str.toLowerCase().split(regexPattern)
  console.log(str.toLowerCase())
  let charMap = {}

  for (word of result) {
    charMap[word] = charMap[word] + 1 || 1
  }
  console.log(charMap)
}

console.log(countWords(str))

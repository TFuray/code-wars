//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = () => {
  let str = "That's the password: 'PASSWORD 123'!, cried the Special Agent.\nSo I fled."
const result = str.split(/[,.\s]/)
console.log(result)
};

console.log(countWords())
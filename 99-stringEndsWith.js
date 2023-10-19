// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  let endLength = ending.length
  let comp = []

  for (let i = 0; i < endLength; i++) {
    comp.push(str[str.length - (endLength - i)])
  }
  if (comp.join("") == ending) {
    return true
  } else return false
}

console.log(solution("abc", "bc"), true)
console.log(solution("Thomas", "k"), false)

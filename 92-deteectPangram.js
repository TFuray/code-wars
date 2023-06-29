// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const check = "abcdefghijklmnopqrustuvwxyz"

  if (string.length < 26) {
    return false
  }

  const checkMap = {}
  for (const letter of check) {
    checkMap[letter] = checkMap[letter] || 0
  }
  for (const letter of string.toLowerCase()) {
    if (letter >= "a" && letter <= "z") {
      checkMap[letter] = checkMap[letter] + 1
    }
  }
  if (Object.values(checkMap).includes(0)) {
    return false
  } else {
    return true
  }
}
var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string), true)

var stringB = "This is not a pangram."
console.log(isPangram(stringB), false)

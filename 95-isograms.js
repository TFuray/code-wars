// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


function isIsogram(str) {
  if (str.length === 0) {
    return true
  }
  const charMap = {}

  for (const char of str.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }

  for (const char in charMap) {
    if (charMap[char] > 1) {
      return false
    }
  }
  return true
}


console.log(isIsogram("Dermatoglyphics"), (true))
console.log(isIsogram("moose"), (false))
console.log(isIsogram("aba"), (false))
// #What doesn't belong to these?

// Write a method that takes an array of elements and returns the element that does not belong to these elements.

// Example:

// [1, 2, 2, 2, 2] -> 1
// ['1', 2, '4', '6', '8'] -> 2
// [2, 2, -2, 6, 10] -> -2
// ['a', 'a', 'b', 'a', 'a', 'a', 'a'] -> 'b'
// Look in the example tests. (The submit tests have no additional surprises!)

// The elements will only be of the types:
// boolean, char (or string with one char in JS/TS) or int (number in JS/TS).

// The array will never be null and there will always more than 2 values in the array!

// It is always exactly one element that does not belong to the other elements.
// The values in the array will never be null or undefined or 0.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findTheNotFittingElement(series) {
  let charMap = {}
  count = 0
  type = null

  for (const char of series) {
    charMap[typeof char] = charMap[typeof char] + 1 || 1
  }
  console.log(count)
    
}

console.log(findTheNotFittingElement([1, 2, 2, 2, 2]), 1)
console.log(findTheNotFittingElement([true, true, true, false, true]), false)
// console.log(findTheNotFittingElement(["a", "a", "b", "a", "a", "a", "a"]), "b")
// console.log(findTheNotFittingElement(["1", 2, "4", "6", "8"]), 2)
// console.log(findTheNotFittingElement([2, 2, 2, 2, 2, "2"]), "2")
// console.log(findTheNotFittingElement([1, 2, 4, 6, true]), true)
// console.log(findTheNotFittingElement([1, 2, 4, 6, 10]), 1)
// console.log(findTheNotFittingElement([2, 2, -2, 6, 10]), -2)
// console.log(findTheNotFittingElement(["Z", "L", "P", "t", "G"]), "t")
// console.log(findTheNotFittingElement(["Z", "L", "3", "t", "G"]), "3")
// console.log(findTheNotFittingElement(["Z", "L", "3", "t", 4]), 4)
// console.log(findTheNotFittingElement(["Z", "e", ".", "a", "G"]), ".")

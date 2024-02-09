// Task
// Implement a function which finds the numbers less than 2, and the indices of numbers greater than 1 in the given sequence, and returns them as a pair of sequences.

// Return a nested array or a tuple depending on the language:

// The first sequence being only the 1s and 0s from the original sequence.
// The second sequence being the indexes of the elements greater than 1 in the original sequence.
// Examples
// [ 0, 1, 2, 1, 5, 6, 2, 1, 1, 0 ] => [ [ 0, 1, 1, 1, 1, 0 ], [ 2, 4, 5, 6 ] ]
// Please upvote and enjoy!

function binaryCleaner(arr) {
  let lessThan = []
  let greaterThan = []

  arr.map((value, index) => {
    if (value < 2) {
      lessThan.push(value)
    } else {
      greaterThan.push(index)
    }
  })
  return [lessThan, greaterThan]
}

console.log(
  binaryCleaner([0, 1, 2, 1, 0, 2, 1, 1, 1, 0, 4, 5, 6, 2, 1, 1, 0]),
  [
    [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
    [2, 5, 10, 11, 12, 13],
  ],
  "Should return"
)
console.log(binaryCleaner([0,1,1,2,0]), [ [ 0, 1, 1, 0 ], [ 3 ] ], "Should return")
console.log(binaryCleaner([2,2,0]), [ [ 0 ], [ 0, 1 ] ], "Should return: ")
console.log(binaryCleaner([0,1,2,1,0,2,1,1]), [ [ 0, 1, 1, 0, 1, 1 ], [ 2, 5 ] ], "Should return")

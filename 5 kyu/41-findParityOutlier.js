// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

let test = [2, 4, 0, 100, 4, 11, 2602, 36]
let test2 = [160, 3, 1719, 19, 11, 13, -21]

function findOutlier(integers) {
  if (
    integers[0] % 2 === 0 &&
    (integers[1] % 2 === 0) & (integers[2] % 2 === 0)
  ) {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 !== 0 && integers[i] != 0) {
        return integers[i]
      }
    }
  } else {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 == 0 && integers[i] != 0) {
        return integers[i]
      }
    }
  }
}



console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([0, 0, 3, 0, 0]), 3)
console.log(findOutlier([1, 1, 0, 1, 1]), 0)
console.log(findOutlier([2, 6, 8, 10, 3]), 3)

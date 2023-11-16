// Task:
// You have to create a function isPronic to check whether the argument passed is a Pronic Number and return true if it is & false otherwise.

// Description:
// Pronic Number -A pronic number, oblong number, rectangular number or heteromecic number, is a number which is the product of two consecutive integers, that is, n(n + 1).

// The first few Pronic Numbers are - 0, 2, 6, 12, 20, 30, 42...

// Explanation:
//   0 = 0 × 1   // ∴  0 is a Pronic Number
//   2 = 1 × 2   // ∴  2 is a Pronic Number
//   6 = 2 × 3   // ∴  6 is a Pronic Number
//  12 = 3 × 4   // ∴ 12 is a Pronic Number
//  20 = 4 × 5   // ∴ 20 is a Pronic Number
//  30 = 5 × 6   // ∴ 30 is a Pronic Number
//  42 = 6 × 7   // ∴ 42 is a Pronic Number
// Note:
// Negative numbers are tested as well.


function isPronic(n) {
  const squareRoot = Math.sqrt(n)
  const rounded = Math.floor(squareRoot)
  if (rounded * (rounded + 1) == n) {
    return true
  } else return false
}


    // console.log((isPronic(0), true, "0 is a Pronic Number"))
    // console.log((isPronic(1), false, "1 is not a Pronic Number"))
    // console.log((isPronic(2), true, "2 is a Pronic Number"))
    // console.log((isPronic(3), false, "3 is not a Pronic Number"))
    // console.log((isPronic(4), false, "4 is not a Pronic Number"))
    console.log((isPronic(5), false, "5 is not a Pronic Number"))
    console.log((isPronic(6), true, "6 is a Pronic Number"))
    // console.log((isPronic(-3), false, "-3 is not a Pronic Number"))
// console.log((isPronic(-27), false, "-27 is not a Pronic Number"))

console.log(isPronic(-27))
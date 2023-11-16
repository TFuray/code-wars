// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples(input-- > output)
// 4 -- > 3(1, 2, 4)
// 5 -- > 2(1, 5)
// 12 -- > 6(1, 2, 3, 4, 6, 12)
// 30 -- > 8(1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n) {
  let count = 0
  for (let i = n; i > 0; i--) {
    if (n % i === 0) {
      count++
    }
  }
  return count
}

console.log(getDivisorsCnt(12))

// function getDivisorsCnt(n) {
//     let count = 1
//     for (let index = 0; index < n; index++) {
//         if (n % index === 0) {
//             count ++
//         }
//   }
//   return count
// }
function getDivisorsCnt(n) {
  var res = [],
    sqrt = Math.sqrt(n)
  for (let i = 1; i <= sqrt; ++i) {
    if (n % i == 0) {
      res.push(i)
      res.push(n / i)
    }
  }
  res = Array.from(new Set(res))
  return res.length
}

console.log(getDivisorsCnt(54), 8)

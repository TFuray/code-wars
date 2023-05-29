function maxProduct(a) {
//   if (a.length <= 1) {
//     return
//   }

//   const pivot = a[Math.floor(a.length / 2)]
//   const left = []
//   const right = []

//   for (let i = 0; i < a.length; i++) {
//     if (i === Math.floor(a.length / 2)) {
//       continue
//     }

//     if (a[i] < pivot) {
//       left.push(a[i])
//     } else {
//       right.push(a[i])
//     }
//   }
//   return [...maxProduct(left), pivot, ...maxProduct(right)]
// }

// console.log(
//   maxProduct([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252])
// )
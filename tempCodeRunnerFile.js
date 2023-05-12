function minSteps(apples) {
//   let steps = 0
//   let total = apples.reduce((acc, val) => acc + val, 0)
//   if (total % apples.length === 0 && apples.includes(1) == false) {
//     let sort = apples.sort((a, b) => a - b)
//     while (sort[0] !== sort[sort.length - 1]) {
//       sort[0] += 2
//       sort[sort.length - 1] += -2
//       steps++
//       sort = sort.sort((a, b) => a - b)
//     }
//   } else {
//     return -1
//   }
//   return steps
// }
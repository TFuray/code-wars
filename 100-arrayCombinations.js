// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// Hint: You have an array full of arrays. Map through the parent array and make sure each sub array is a set aka no duplicate numbers. Once each sub array contains no duplicates you can just reduce multiplying the length of each sub array together to get the total combinations

// function solve(arrays) {

//   const getCombinations = (currentCombo, index) => {
//     if (index === arrays.length) {
//       // console.log(currentCombo.slice())
//       return [currentCombo.slice()]
//     }

//     const currentArray = arrays[index]

//     return currentArray.map((element) => {
//       return getCombinations([...currentCombo, element], index + 1)
//     }).flat()
// }
//     const allCombinations = getCombinations([], 0)
//   const total = allCombinations.filter((value, index) => allCombinations.indexOf(value) == index)
//   return total
// }

function solve(arr) {
  let trueLength = []
  trueLength = arr
    .map((element) => {
      let chars = new Set(element)
      return chars.size
    })
    .reduce((acc, current) => {
      return acc * current
    })

  return trueLength
}

// console.log(solve([[1, 2], [4], [5, 6]]))

// console.log((solve([[1,2],[4],[5,6]])))
console.log(
  solve([
    [1, 2],
    [4, 4],
    [5, 6, 6],
  ])
)
// console.log((solve([[1,2],[3,4],[5,6]])))
// console.log((solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]])))

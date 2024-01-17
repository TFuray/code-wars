// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

function sumNoDuplicates(numList) {
  const charMap = {}
  let total = 0

  for (const num of numList) {
    charMap[num] = charMap[num] + 1 || 1
  }

  for (const num in charMap) {
    if (charMap[num] === 1) {
      total += Number(num)
    }
  }
  return total
}

console.log(sumNoDuplicates([1, 1, 2, 3]))
console.log(sumNoDuplicates([]))
console.log(sumNoDuplicates([1, 1, 2, 2, 3]))
console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]))

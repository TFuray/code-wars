// Rick wants a faster way to get the product of the largest pair in an a. Your task is to create a performant solution to find the product of the largest two integers in a unique a of positive numbers.
// All inputs will be valid.
// Passing [2, 6, 3] should return 18, the product of [6, 3].

// Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

// maxProduct([2, 1, 5, 0, 4, 3])              // 20
// maxProduct([7, 8, 9])                       // 72
// maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874

function maxProduct(a) {
  function quickSort(array) {
    if (array.length <= 1) {
      return array
    }

    const pivot = array[Math.floor(array.length / 2)]
    const left = []
    const right = []

    for (let i = 0; i < array.length; i++) {
      if (i === Math.floor(array.length / 2)) {
        continue
      }

      if (array[i] < pivot) {
        left.push(array[i])
      } else {
        right.push(array[i])
      }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
  }
  let sorted = quickSort(a)
  return sorted[sorted.length - 2] * sorted[sorted.length - 1]
}

function quickSort(array) {
  if (array.length <= 1) {
    return array
  }

  const pivot = array[Math.floor(array.length / 2)]
  const left = []
  const right = []

  for (let i = 0; i < array.length; i++) {
    if (i === Math.floor(array.length / 2)) {
      continue
    }

    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

// Example usage
const numbers = [114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252]

console.log(maxProduct(numbers))

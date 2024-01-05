// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

var moveZeroes = function (nums) {
  let counter = 0
  const removeZeros = (value, index, arr) => {
    if (value === 0) {
      counter = counter + 1
      arr.splice(index, 1)
      return true
    }
    return false
  }
  const x = nums.filter(removeZeros)
  return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))

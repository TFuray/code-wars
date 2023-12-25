// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.



// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


var moveZeroes = function (nums) {
    const length = nums.length
    nums.filter((num) => num != 0)
    const newLength = nums.length
  // return nums.map((el, index) => {
  //   if (el !== 0) {
  //     return el
  //   } else if(el === 0) {
  //     return nums.splice(index, 1) && nums.push('0')
  //   }
  // })
}


console.log(moveZeroes([0,1,0,3,12]))
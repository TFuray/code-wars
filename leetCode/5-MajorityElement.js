// 169. Majority Element
// Easy
// 13K
// 417
// Companies
// Given an numsay nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the numsay.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

var majorityElement = function (nums) {
  let elem = {},
      count = 0,
      majElem = nums[0]

  for(const num of nums){
    elem[num] = elem[num] + 1 || 1
  }

  for(const n in elem){
    if(elem[n] > count){
      count = elem[n]
      majElem = n
    }
  }
  return majElem

}

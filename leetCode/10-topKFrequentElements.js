// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.


var topKFrequent = function (nums, k) {
  let charMap = {}

  for (const char of nums) {
    charMap[char] = charMap[char] + 1 || 1
  }

  const entries = Object.entries(charMap)
  entries.sort((a,b) => b[1]-a[1])
  const sorted = Object.fromEntries(entries)

  return Object.keys(sorted).slice(0, k)

}

console.log(topKFrequent([-1,-1,-1,1,1,1,2,2], 2))
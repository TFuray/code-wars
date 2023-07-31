
// Sure! Here's an intermediate-level coding challenge that you might encounter in a software developer interview, focusing on JavaScript:

// Challenge: Sum Pairs

// Write a function findSumPairs(arr, targetSum) that takes an array of integers arr and an integer targetSum. The function should find and return an array containing all unique pairs of elements in the input array that add up to the targetSum.

// Note:

// Each pair of elements in the result should be sorted in ascending order.
// A number can be part of multiple pairs.
// Examples:

// javascript
// Copy code
// findSumPairs([1, 2, 3, 4, 5], 7);
// // Output: [[2, 5], [3, 4]]

// findSumPairs([3, 9, 2, 1, 5], 10);
// // Output: [[1, 9], [2, 8], [3, 7]]

// findSumPairs([6, 2, 4, 8, 2, 5], 10);
// // Output: [[2, 8], [4, 6], [5, 5]]

// findSumPairs([1, 2, 3, 4, 5], 8);
// // Output: [[3, 5]]
// Constraints:

// The input array arr will contain at most 1000 elements.
// Each element of arr will be an integer between -1000 and 1000 (inclusive).
// The targetSum will be an integer between -2000 and 2000 (inclusive).
// Your task is to implement the findSumPairs function. Ensure your solution is efficient and handles edge cases appropriately. You may assume that the input array will always have at least one valid pair that sums up to the targetSum.

const findSumPairs = (arr, targetSum) => {
  
}
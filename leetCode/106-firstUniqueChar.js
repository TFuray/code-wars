// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

var firstUniqChar = function (s) {
  let charMap = {}
  let singles = []
  let pos = []
  for (const el of s) {
    charMap[el] = charMap[el] + 1 || 1
  }
  for (const el in charMap) {
    if (charMap[el] === 1) {
      singles.push(el)
    }
  }
  for (const el in s) {
    if (singles.includes(s[el])) {
      pos.push(el)
    }
  }
  if (pos[0] === undefined) {
    return -1
  } else return pos[0]
}

// console.log(firstUniqChar('loveleetcode'))
console.log(firstUniqChar("aabb"))

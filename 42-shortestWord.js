// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

let test = 'This is the test will will use.'

function findShort(s){
  let arr = s.split(' ')
  let arrLength = arr.map(word => {
    return word.length
  })
  arrLength.sort((a,b) => a-b)
  return arrLength[0]
}

console.log(findShort(test))
const string = 'abcdddefghi'

// return longest consecutive substring without repeats

const subString = (str) => {
    let consecutive = []
  const array = str.split('').map((val, index, array) => {
    if (index > 0 && val !== array[index - 1] && val !== array[index + 1]) {
      consecutive.push(val)
    }
  })
  return consecutive
}

console.log(subString(string))
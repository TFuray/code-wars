// Format any integer provided into a string with "," (commas) in the correct places.

// Example:

// For n = 100000 the function should return '100,000';
// For n = 5678545 the function should return '5,678,545';
// for n = -420902 the function should return '-420,902';

var numberFormat = function (number) {
  let positive = Math.abs(number)
  let array = positive.toString().split("").reverse()

  for (let i = 3; i < array.length; i += 4) {
    array.splice(i, 0, ",")
  }

  if (number > 0) {
    return array.reverse().join("")
  } else {
    return `-${array.reverse().join("")}`
  }
}

console.log(numberFormat(100000))
console.log(numberFormat(-885678545))

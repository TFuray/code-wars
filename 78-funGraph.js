// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

const test = 734

function expandedForm(num) {
  const array = num.toString().split("").map(Number)
  const exp = array.map((val, idx) => {
    if (val === 0) {
      return null
    }
    return val + "0".repeat(array.length - idx - 1)
  })
  if (exp.includes(null)) {
    const filter = exp.filter((value) => value !== null)
    const str = filter.join(" + ")
    return str
  } else {
    const str = exp.join(" + ")
    return str
  }
}

console.log(expandedForm(test))

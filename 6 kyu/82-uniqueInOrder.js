// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
  let array
  if (typeof iterable === "string") {
    array = iterable.split("")
  } else {
    array = iterable
  }
  let filter = array.filter((element, index, array) => {
    if (element !== array[index - 1]) {
      return element
    }
  })
  return filter
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"])
console.log(uniqueInOrder("ABBCcAD"), ["A", "B", "C", "c", "A", "D"])
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3])
console.log(uniqueInOrder([]))
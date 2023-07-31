// const string = 'abcdddefghi'

// // return longest consecutive substring without repeats

// const subString = (str) => {
//     let consecutive = []
//   const array = str.split('').map((val, index, array) => {
//     if (index > 0 && val !== array[index - 1] && val !== array[index + 1]) {
//       consecutive.push(val)
//     }
//   })

//   return consecutive
// }

// console.log(subString(string))


// -----------------------------------------------------------------------------------------------------


// In: JPMORGANISHIRING, 3

// J   R   I   R
// P O G N S I I G
// M   A   H   N

// out: JRIRPOGNSIIGMAHN

// loop through string
// assign array for each row
//based on row number follow pattern assigning elements to each row array ex: rows=3 1,2,3,2,1,2,3,

// const zigZag = (string, rows) => {

// }


//////////////////////////////////////////////////////////////////////////

// Q. Write a function to return below details?

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
]

// 1. MAP:
// Get an array of all names
// Get an array of all heights
// Get an array of objects with just name and height properties
// Get an array of all first names

const getNames = (array) => {
  const nameArr = array.map((obj) => {
    return (obj.name)
  })
  return nameArr
}

console.log(getNames(characters))

// 2. REDUCE:

// Get the total mass of all characters
// Get the total height of all characters
// Get the total number of characters in all the character names
// Get the total number of characters by eye color (hint. a map of eye color to count)

const totalMass = characters.reduce()

// 3. FILTER:

// Get characters with mass greater than 100
// Get characters with height less than 200
// Get all male characters
// Get all female characters
// Answer
// ↥ back to top
// 4. SORT:

// Sort by name
// Sort by mass
// Sort by height
// Sort by gender
// Answer
// ↥ back to top
// 5. EVERY:

// Does every character have blue eyes?
// Does every character have mass more than 40?
// Is every character shorter than 200?
// Is every character male?
// Answer
// ↥ back to top
// 6. SOME:

// Is there at least one male character?
// Is there at least one character with blue eyes?
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?
// Answer
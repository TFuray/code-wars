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

const zigZag = (string, rows) => {

}
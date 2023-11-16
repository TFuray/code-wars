/* 
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
*/ 

let test = [4, 3, 2, 5]


function upArray(arr){
  for(let i=0; i<arr.length;i++){
    if(arr[i] < 0 || arr[i] > 9 || arr === []){
      return null
    }
  }
  let str = ''
  let endArr = []
  arr.forEach(element => {
    str = str + element
  })
  str = Number(str) + 1
  str = str.toString()
  for(let i=0; i<str.length;i++){
    endArr.push(Number(str[i]))
  }
  return endArr
}

console.log(upArray(test))

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


let test = [false,1,0,1,2,0,1,3,"a"]


function moveZeros (arr) {
  function check(num){
    return num !== 0
  }
  function getZ(num){
    return num === 0
  }
  let noZeros = arr.filter(check)
  let zeros = arr.filter(getZ)
  return noZeros.concat(zeros)
}

console.log(moveZeros(test))
// Task
// Here are some children, each with a certain number of apples. Now we have to do something to make the number of apples of each child are equal.

// We need to complete the redistribution step by step. With each step, we can transfer two apples from one child to another (whether or not adjacent does not matter).

// Given an array apples that represents the number of apples per child. Your task is to calculate the minimum step of the transition operation. If it's impossible, return -1.

// Example
// For apples=[7,15,9,5], the output should be 3.

//                        7 15 9 5
// step 1: 15-2, 5+2 ---> 7 13 9 7
// step 2: 13-2, 7+2 ---> 9 11 9 7
// step 3: 11-2, 7+2 ---> 9  9 9 9
// For apples=[7,7,7,7], the output should be 0.

// The children's apples are equal already. No need more step.

// For apples=[7,7,7,5], the output should be -1.

// 26 apples can't be divided equally between 4 children.

const test = [7, 15, 9, 5]
// console.log((test.reduce((acc,val)=> acc + val, 0)) % test.length)

function minSteps(apples) {
  const totalApples = apples.reduce((sum, current) => sum + current, 0)
  const numOfChildren = apples.length

  if (totalApples % numOfChildren !== 0) {
    return -1 // Apples cannot be divided equally among children
  }

  const targetApples = totalApples / numOfChildren
  let steps = 0

  for (let i = 0; i < apples.length; i++) {
    const diff = apples[i] - targetApples
    if (diff > 0 && diff % 2 !== 0) {
      return -1 // Unequal distribution not possible
    }
    steps += Math.abs(diff) / 2
  }

  return steps/2
}

// function minSteps(apples) {
//   let steps = 0
//   let total = apples.reduce((acc, val) => acc + val, 0)
//   if (total % apples.length === 0 && apples.includes(1) == false) {
//     let sort = apples.sort((a, b) => a - b)
//     while (sort[0] !== sort[sort.length - 1]) {
//       sort[0] += 2
//       sort[sort.length - 1] += -2
//       steps++
//       sort = sort.sort((a, b) => a - b)
//     }
//   } else {
//     return -1
//   }
//   return steps
// }

console.log(minSteps(test))

function minStepsEqualizeApples(apples) {
  const totalApples = apples.reduce((sum, num) => sum + num, 0)
  if (totalApples % apples.length !== 0) {
    return -1
  }
  const targetApples = totalApples / apples.length
  let steps = 0
  for (let i = 0; i < apples.length; i++) {
    const diff = apples[i] - targetApples
    if (diff % 2 !== 0) {
      return -1
    }
    if (diff > 0) {
      steps += diff / 2
    }
  }
  return steps
}

// Example usage:
console.log(minStepsEqualizeApples([7, 15, 9, 5])); // Output: 3
console.log(minStepsEqualizeApples([7, 7, 7, 7])); // Output: 0
console.log(minStepsEqualizeApples([7, 7, 7, 5])); // Output: -1
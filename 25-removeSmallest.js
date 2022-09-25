// Task
// Write a function that returns both the minimum and maximum number of the given list / array.

//     Examples(Input-- > Output)
// [1, 2, 3, 4, 5]-- > [1, 5]
// [2334454, 5]-- > [5, 2334454]
// [1]-- > [1, 1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.


// function minMax(arr) {
//    let a = arr.sort((a,b) => a-b)
//     let aa = a[0]
//     let bb = a[a.length-1]
//     let final = [aa, bb]
//     return final
// }

// minMax([1, 2, 3, 4])


// /* ================================================================ */

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions.Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions.She gives them a rating, and then removes the one with the lowest rating.

//     However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value.Do not mutate the original array / list.If there are multiple elements with the same value, remove the one with a lower index.If you get an empty array / list, return an empty array / list.

//     Don't change the order of the elements that are left.

// Examples
//     * Input: [1, 2, 3, 4, 5], output = [2, 3, 4, 5]
//         * Input: [5, 3, 2, 1, 4], output = [5, 3, 2, 4]
//             * Input: [2, 2, 1, 2, 1], output = [2, 2, 2, 1]



// function removeSmallest(numbers) {
//     let min = Math.min(...numbers)
//     let length = numbers.length
//     return numbers.filter(e => e != min)
// }

array = [2, 1, 3, 4, 5, 1];

function removeSmallest(numbers) {
    numbers = numbers.slice(); //copy the array
    numbers.splice(numbers.indexOf(Math.min.apply(null, numbers)), 1)
    return numbers;
}




console.log(removeSmallest([5, 3, 2, 1, 4, 1]));
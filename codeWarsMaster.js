

// /* ================================================================ */

// // function reverseString(str) {
// //     var splitString = str.split('');
// //     var reverseString = splitString.reverse('');
// //     var finishedString = reverseString.join('');
// //     return finishedString;
// // }

// // reverseString('test');


// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));

// /* ================================================================ */
// function check(a, x) {
//     for (let i = 0; i < a.length; i++) {
//         if (x == a[i]) {
//             return true;
//         }
//     }
//     return false;
// }
// /* ================================================================ */
// /* 
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, 
// there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
// */

// let test = ['hello', 'world', 'this', 'is', 'great'];

// function smash(words) {
//     let string = "";
//     for (let i = 0; i < words.length; i++) {
//         if (i == 0 || i == words.length) {
//             string = string + words[i];
//         } else {
//             string = string + " " + words[i];
//         }
//     }
//     return string;
// }

// console.log(smash(test));


// /* ================================================================ */
// /* 
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
// */

// let test1 = [34, 15, 88, 2];
// let test2 = [34, -345, -1, 100];

// // function findSmallestInt(args) {
// //     let min = args[0];
// //     for(let i = 0; i < args.length; i++) {
// //        if(args[i] < min){
// //         min = args[i];
// //        }
// //     } return min;
// // }



// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         let min = args[0];
//         for (let i = 0; i < args.length; i++) {
//             if (args[i] < min) {
//                 min = args[i];
//             }
//         } return min;
//     }
// }

// /* ================================================================ */
// // Write a function which calculates the average of the numbers in a given list.

// //     Note: Empty arrays should return 0.

// let find1 = [1, 1, 1];
// let find2 = [1, 2, 3];
// let find3 = [1, 2, 3, 4];
// let find4 = [];



// function find_average(array) {
//     // your code here
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     } average = sum / array.length;
//     if (isNaN(average)) {
//         return 0;
//     } else {
//         return average;
//     }
// }

// console.log(find_average(find4));

// /* ================================================================ */
// // Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// function boolToWord(bool) {
//     //...
// }
// /* ================================================================ */
// // Write a function that takes an array of numbers and returns the sum of the numbers.The numbers can be negative or non - integer.If the array does not contain any numbers then you should return 0.

// // Examples
// // Input: [1, 5.2, 4, 0, -1]
// // Output: 9.2

// // Input: []
// // Output: 0

// // Input: [-2.398]
// // Output: -2.398

// // Assumptions
// // You can assume that you are only given numbers.
// // You cannot assume the size of the array.
// // You can assume that you do get an array and if the array is empty, return 0.
// // What We're Testing

// // Sum Numbers
// function sum(numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     } return total;
// }
// let test = [1, 5.2, 4, 0, -1];

// console.log(sum(test));
// /* ================================================================ */
// // Can you find the needle in the haystack ?

// //     Write a function findNeedle() that takes an array full of junk but containing one "needle"

// // After your function finds the needle it should return a message(as a string) that says:

// // "found the needle at position " plus the index it found the needle, so:

// // Example(Input-- > Output)

// // ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]-- > "found the needle at position 5"
// // Note: In COBOL, it should return "found the needle at position 6"


// function findNeedle(haystack) {

// }
// /* ================================================================ */
// // Code as fast as you can! You need to double the integer and return it.

// function doubleInteger(i) {
//     // i will be an integer. Double it and return it.
//     return i * 2;
// }
// /* ================================================================ */
// // Implement a function which convert the given boolean value into its string representation.

// //     Note: Only valid inputs will be given.

// function booleanToString(b) {
//     if (b == true) {
//         return 'true';
//     } else {
//         return 'false';
//     }
// }
// /* ================================================================ */
// // Complete the square sum function so that it squares each number passed into it and then sums the results together.

// // For example, for [1, 2, 2] it should return 9 because 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.

// let test = [1, 2, 2]


// function squareSum(numbers) {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i] * numbers[i]
//     } return sum
// }

// console.log(squareSum(test));

// /* ================================================================ */
// // Complete the function that accepts a string parameter, and reverses each word in the string.All spaces in the string should be retained.

// //     Examples
// // "This is an example!" ==> "sihT si na !elpmaxe"
// // "double  spaces" ==> "elbuod  secaps"0.41

// function reverseWords(str) {
//     let revArray = []
//     for (let i = str.length - 1; i >= 0; i--) {
//         revArray.push(str[i])
//     }
//     return revArray.join('')
// }
// let test = 'The quick brown fox jumps over the lazy dog.'

// console.log(reverseWords(test));
// /* ================================================================ */
// // Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function evenOrOdd(number) {
//     if (number % 2 == 0) {
//         return 'Even'
//     } else { return "Odd" }
// }

// console.log(evenOrOdd(439));

// /* ================================================================ */
// // Count the number of divisors of a positive integer n.

// // Random tests go up to n = 500000.

// // Examples(input-- > output)
// // 4 -- > 3(1, 2, 4)
// // 5 -- > 2(1, 5)
// // 12 -- > 6(1, 2, 3, 4, 6, 12)
// // 30 -- > 8(1, 2, 3, 5, 6, 10, 15, 30)


// function getDivisorsCnt(n) {
//     let count = 0;
//     for (let i = n; i > 0; i--) {
//         if (n % i === 0) {
//             count++
//         }
//     }
//     return count
// }

// console.log(getDivisorsCnt(12));


// /* ================================================================ */
// // Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument(also a string).

// //     Examples:

// // solution('abc', 'bc') // returns true
// // solution('abc', 'd') // returns false


// function solution(str, ending) {
//     let result = str.endsWith(ending)
//     return result
// }


// /* ================================================================ */
// // Your task is to make a function that can take any non - negative integer as an argument and return it with its digits in descending order.Essentially, rearrange the digits to create the highest possible number.

// //     Examples:
// // Input: 42145 Output: 54421

// // Input: 145263 Output: 654321

// // Input: 123456789 Output: 987654321


// function descendingOrder(n) {
//     let newArray = Array.from(String(n), Number)
//     newArray.sort((a, b) => b - a)
//     const singleNumber = Number(newArray.join(''))
//     return singleNumber
// }



// /* ================================================================ */
// // An isogram is a word that has no repeating letters, consecutive or non - consecutive.Implement a function that determines whether a string that contains only letters is an isogram.Assume the empty string is an isogram.Ignore letter case.

// // Example: (Input-- > Output)

// // "Dermatoglyphics" -- > true
// // "aba" -- > false
// // "moOse" -- > false(ignore letter case)


// function isIsogram(str) {
//     str = str.toLowerCase()
//     let arr = [...str]
//     arr = arr.filter(e => String(e).trim());
//     const findDups = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
//     const duplicateElements = findDups(arr);
//     if (duplicateElements == '') {
//         return true
//     } else return false
// }



// function moreDirect(str) {
//     let i, j;
//     str = str.toLowerCase();
//     for (i = 0; i < str.length; i++)
//         for (j = i + 1; j < str.length; j++)
//             if (str[i] === str[j])
//                 return false;
//     return true;
// }


// /* ================================================================ */
// // Create a function that will return true if all numbers in the sequence follow the same counting pattern.If the sequence of numbers does not follow the same pattern, the function should return false.

// // Sequences will be presented in an array of varied length.Each array will have a minimum of 3 numbers in it.

// // The sequences are all simple and will not step up in varying increments such as a Fibonacci sequence.

// // JavaScript examples:

// // let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 34, 22, 10]
// // validateSequence([1, 2, 3, 4, 5, 8, 7, 8, 9]) === false
// // validateSequence([2, 4, 6, 8, 10]) === true
// // validateSequence([0, 2, 4, 6, 8]) === true
// // validateSequence([1, 3, 5, 7, 9]) === true
// // validateSequence([1, 2, 4, 8, 16, 32, 64]) === false
// // validateSequence([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]) === false

// // test sequence
// let sample = [1, 2, 3, 4, 5, 6, 7, 8]

// // create new array with sequence
// function check(array) {
//     let newOnes = []
//     for (let i = 1; i < array.length; i++) {
//         newOnes.push(array[i] - array[i - 1])
//     }
//     return newOnes;
// }

// // check new array has same sequence 
// const allEqual = arr => arr.every(v => v === arr[0]);

// // put both together and return true if numbers follow sequence
// function validateSequence(x) {
//     let test = check(x);
//     return allEqual(test)
// }

// console.log(validateSequence(sample));
// /* ================================================================ */
// // Complete the method which returns the number which is most frequent in the given input array.If there
// //  is a tie for most frequent number, return the largest number among them.

// //     Note: no empty arrays will be given.

// //         Examples
// //     [12, 10, 8, 12, 7, 6, 4, 10, 12]-- > 12
// //     [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]-- > 12
// //     [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]-- > 3
// const test1 = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]
// const test2 = [12, 10, 8, 7, 6, 4, 4, 10, 10]


// function countObject(arr) {
//     let countObject = arr.reduce(function (count, currentValue) {
//         return (
//             count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
//             count
//         );
//     },
//         {});
//     return countObject
// }

// function highestRank(arr) {
//     let sorted = countObject(arr)
//     keysSorted = Object.keys(sorted).sort(function (a, b) { return sorted[b] - sorted[a] })
//     return Number(keysSorted[0])
// }

// console.log(highestRank(test2))
// /* ================================================================ */
// // Task:
// // Your task is to write a function which returns the sum of following series upto nth term(parameter).

// //     Series: 1 + 1 / 4 + 1 / 7 + 1 / 10 + 1 / 13 + 1 / 16 +...
// // Rules:
// // You need to round the answer to 2 decimal places and return it as String.

// // If the given value is 0 then it should return 0.00

// // You will only be given Natural Numbers as arguments.

// //     Examples: (Input-- > Output)
// // 1 -- > 1 -- > "1.00"
// // 2 -- > 1 + 1 / 4 -- > "1.25"
// // 5 -- > 1 + 1 / 4 + 1 / 7 + 1 / 10 + 1 / 13 -- > "1.57"

// // let series = [1, 1 / 4, 1 / 7, 1 / 10, 1 / 13, 1 / 16]


// function SeriesSum(n) {
//     let series = [1, 1 / 4, 1 / 7, 1 / 10, 1 / 13, 1 / 16, 1 / 19, 1 / 22, 1 / 25, 1 / 28, 1 / 31, 1 / 33, 1 / 35, 1 / 38, 1 / 41, 1 / 44, 1 / 47, 1 / 50]
//     let sum = 0
//     for (let i = 0; i < n; i++) {
//         sum += series[i]
//     }
//     return sum.toFixed(2)
// }

// console.log(SeriesSum(13))
// /* ================================================================ */
// // This time no story, no theory.The examples below show you how to write function accum:

// //     Examples:
// // accum("abcd") -> "A-Bb-Ccc-Dddd"
// // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// // accum("cwAt") -> "C-Ww-Aaa-Tttt"
// // The parameter of accum is a string which includes only letters from a..z and A..Z.


// function accum(s) {
//     let letters = s.split('')
//     let result = []
//     for (let i = 0; i < letters.length; i++) {
//         result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()))
//     }
//     return result.join('-')
// }

// console.log(accum('abc'))
// /* ================================================================ */
// // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// // Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.Additionally, if the number is negative, return 0(for languages that do have them).

// // Note: If the number is a multiple of both 3 and 5, only count it once.


// function solution(number) {
//     let sum = 0
//     for (let i = 1; i < number; i++) {
//         if (i % 5 === 0 || i % 3 == 0) {
//             sum = i + sum
//         }
//     } return sum
// }

// console.log(solution(10));


// /* ================================================================ */
 
// Task
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.If the two numbers are equal return a or b.

//     Note: a and b are not ordered!
// Examples(a, b)-- > output(explanation)

//     (1, 0)-- > 1(1 + 0 = 1)
//         (1, 2)-- > 3(1 + 2 = 3)
//             (0, 1)-- > 1(0 + 1 = 1)
//                 (1, 1)-- > 1(1 since both are same)
//                     (-1, 0)-- > -1(-1 + 0 = -1)
//                         (-1, 2)-- > 2(-1 + 0 + 1 + 2 = 2)


function getSum(a, b) {
    let sum = 0
    if(a<b){
        for(let i=a;i<=b;i++){
            sum += i
        }
        return sum
    }else{
        for(let i=b;i<=a;i++){
            sum +=i
        }return sum
    }
}


// /* ================================================================ */

// /* ================================================================ */

// /* ================================================================ */

// /* ================================================================ */

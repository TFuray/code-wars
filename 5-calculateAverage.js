// Write a function which calculates the average of the numbers in a given list.

//     Note: Empty arrays should return 0.

let find1 = [1,1,1];
let find2 = [1,2,3];
let find3 = [1,2,3,4];
let find4 = [];



function find_average(array) {
    // your code here
    let sum = 0;
    for(let i = 0; i < array.length; i ++) {
        sum += array[i];
    } average = sum / array.length;
    if (isNaN(average)){
        return 0;
    }else{
        return average;
    }
}

console.log(find_average(find4));

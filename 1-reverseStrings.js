// function reverseString(str) {
//     var splitString = str.split('');
//     var reverseString = splitString.reverse('');
//     var finishedString = reverseString.join('');
//     return finishedString;
// }

// reverseString('test');


function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
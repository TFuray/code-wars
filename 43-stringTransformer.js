// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.


let test = "Example Input"

function transformStr(str){
    let rev = str.split(' ').reverse().join(' ')
    let final = rev.split('').map(l => l === l.toUpperCase() ? l.toLowerCase(): l.toUpperCase()).join('')
    return final
}

console.log(transformStr(test))

console.log(transformStr("Example Input"), 'iNPUT eXAMPLE')
// Complete the function that accepts a string parameter, and reverses each word in the string.All spaces in the string should be retained.

//     Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces" ==> "elbuod  secaps"0.41

function reverseWords(str) {
    let revArray = []
    for (let i = str.length -1; i >= 0; i--){
        revArray.push(str[i])
    }
    return revArray.join('')
}
let test = 'The quick brown fox jumps over the lazy dog.'

console.log(reverseWords(test));

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"



function removeDupeWords(str){
    return str.split(" ").filter((w,i,a) => w != a[i-1]).join(' ')
}

let test = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

console.log(removeDupeWords(test))
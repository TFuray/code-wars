// An isogram is a word that has no repeating letters, consecutive or non - consecutive.Implement a function that determines whether a string that contains only letters is an isogram.Assume the empty string is an isogram.Ignore letter case.

// Example: (Input-- > Output)

// "Dermatoglyphics" -- > true
// "aba" -- > false
// "moOse" -- > false(ignore letter case)


function isIsogram(str) {
    str = str.toLowerCase()
    let arr = [...str]
    arr = arr.filter(e => String(e).trim());
    const findDups = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
    const duplicateElements = findDups(arr);
    if (duplicateElements == ''){
        return true
    } else return false
}



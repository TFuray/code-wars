// Convert number to reversed array of digits
// Given a random non - negative number, you have to return the digits of this number within an array in reverse order.

//     Example(Input => Output):
let test = 35231
// 0 => [0]



function digitize(n) {
    let arr = n.toString()
    arr = arr.split('')
    let arr2 = arr.map(element => Number(element))
    return arr2.reverse()

}

console.log(digitize(test))
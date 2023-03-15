
const filterList = (array) => {
 return array.filter(el => (Number.isInteger(el))) 
}


let test = [1, 2, 'a', 'b']

console.log(filterList(test))
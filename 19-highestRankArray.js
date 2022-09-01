// Complete the method which returns the number which is most frequent in the given input array.If there
//  is a tie for most frequent number, return the largest number among them.

//     Note: no empty arrays will be given.

//         Examples
//     [12, 10, 8, 12, 7, 6, 4, 10, 12]-- > 12
//     [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]-- > 12
//     [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]-- > 3
const test1 = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]
const test2 = [12, 10, 8, 7, 6, 4, 4, 10, 10]


function countObject(arr) {
    let countObject = arr.reduce(function (count,currentValue){
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
   {});
   return countObject
}

function highestRank(arr){
    let sorted = countObject(arr)
    keysSorted = Object.keys(sorted).sort(function(a,b){return sorted[b]-sorted[a]})
    return Number(keysSorted[0])
}

console.log(highestRank(test2))
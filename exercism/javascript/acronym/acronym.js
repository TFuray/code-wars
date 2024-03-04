//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  let acronym = []
  let words = phrase.split("-")
  words = words.join(" ").split(" ")
  console.log(words)

  words.map((word, index) => {
    console.log(word[0])
    if (word === '') {
      return
    }
    if (word[0].toUpperCase() != word[0].toLowerCase()) {
      acronym.push(word[0])
    }else(acronym.push(word[1]))
  })

  return acronym.join("").toUpperCase()
}

// console.log(parse("As Soon As Possible"))
// console.log(parse("Liquid-crystal display"))
// console.log(parse("Thank George It's Friday!"))
console.log(parse('Something - I made up from thin air'))

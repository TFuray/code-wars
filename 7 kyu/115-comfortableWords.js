// A comfortable word is a word which you can type always alternating the hand you type with (assuming you type using a QWERTY keyboard and use fingers as shown in the image below).

// That being said, complete the function which receives a word and returns true if it's a comfortable word and false otherwise.

// The word will always be a string consisting of only ascii letters from a to z.To avoid problems with image availability, here's the lists of letters for each hand:

// Left: q, w, e, r, t, a, s, d, f, g, z, x, c, v, b
// Right: y, u, i, o, p, h, j, k, l, n, m
// Examples
// "yams"  -->  true
// "test"  -->  false

function comfortableWord(word) {
  const left = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "a",
    "s",
    "d",
    "f",
    "g",
    "z",
    "x",
    "c",
    "v",
    "b",
  ]
  let pattern = []
  let comfortable = []

  word.split("").map((letter) => {
    if (left.includes(letter)) {
      pattern.push("l")
    } else {
      pattern.push("r")
    }
  })

  pattern.map((value, index, array) => {
    if (value === array[index - 1]) {
      comfortable.push(1)
    } else {
      comfortable.push(0)
    }
  })

  if (comfortable.includes(1)) {
    return false
  } else return true
}

console.log(comfortableWord("test"))
console.log(comfortableWord("yams"))

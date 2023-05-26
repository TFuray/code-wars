// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// Good luck!

function reverseVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  let strArr = str.split("")
  let vowelArr = strArr.filter((letter) => vowels.includes(letter))
  vowelArr = vowelArr.reverse()

  let index = 0
  for (let i = 0; i < strArr.length; i++) {
    if (vowels.includes(strArr[i])) {
      strArr[i] = vowelArr[index]
      index++
    }
  }
  return strArr.join("")
}

console.log(reverseVowels("Hello!"), "Holle!")
console.log(reverseVowels("Tomatoes"), "Temotaos")
console.log(
  reverseVowels("Reverse Vowels In A String"),
  "RivArsI Vewols en e Streng"
)

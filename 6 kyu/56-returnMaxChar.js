// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });


function maxChar(str){
  let charMap = {}
  count = 0
  maxChar = null

  for(const char of str){
    charMap[char] = charMap[char] + 1 || 1
  }

  for(const char in charMap){
    if(charMap[char] > count){
      count = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}


console.log(maxChar('hello world!'), 'l');
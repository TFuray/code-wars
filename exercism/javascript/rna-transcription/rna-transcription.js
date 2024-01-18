//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let rna = dna.split('').map((elem) => {
    if (elem === 'G') {
      return 'C'
    } else if (elem === 'C') {
      return 'G'
    } else if (elem === 'T') {
      return 'A'
    } else if (elem === 'A') {
      return 'U'
    }
  })
  return rna.join('')

};


console.log(toRna("ACGTGGTCTTAA"))
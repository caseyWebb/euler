import { BigNum } from './lib/BigNum'

function numUniqueTerms(lower: number, upper: number) {
  const terms = new Set<string>()
  for (let a = lower; a <= upper; a++) {
    console.log(a)
    for (let b = lower; b <= upper; b++) {
      terms.add(BigNum.pow(BigNum.fromInt(a), BigNum.fromInt(b)).toString())
    }
  }
  return terms.size
}

console.log(numUniqueTerms(2, 100))

import { BigNum } from './lib'

let max = 0

for (let a = 1; a < 100; a++) {
  for (let b = 1; b < 100; b++) {
    const x = BigNum.pow(BigNum.fromInt(a), BigNum.fromInt(b))
    const xDigitSum = x.digitSum()
    if (xDigitSum > max) {
      max = xDigitSum
    }
  }
}

console.log(max)

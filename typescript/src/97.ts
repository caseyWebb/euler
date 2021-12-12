import { BigNum, time } from './lib'

// 2^33 = 8589934592, max 10 digit power of 2

let last10OfPower = 1

time('calculating last 10 digits of 2^7830457', () => {
  for (let i = 0; i < 7830457; i++) {
    last10OfPower = last10OfPower * 2 % 10000000000
  }
})

console.log((last10OfPower * 28433 + 1) % 10000000000)

import { BigNum, time } from './lib'

let n = new BigNum()

time(() => {
  for (let i = 1; i <= 1000; i++) {
    console.log(i)
    const bigI = BigNum.fromInt(i)
    n = BigNum.sum(n, BigNum.pow(bigI, bigI))
  }
})

console.log(n.digits.slice(0, 10).reverse().join(''))

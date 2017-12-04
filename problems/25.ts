import { BigNum } from './lib/BigNum'

const fibs = (function* generateFibs(): IterableIterator<[BigNum, number]> {
  let n1 = new BigNum(1)
  let n2 = new BigNum(1)
  let i = 1

  while (true) {
    yield [n1, i++]
    let tmp = n1
    n1 = n2
    n2 = BigNum.sum(n2, tmp)
  }
})()

while (true) {
  const [fib, i] = fibs.next().value
  if (fib.digits.length >= 1000) {
    console.log(i)
    break
  }
}

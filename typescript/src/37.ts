import { isPrime, time } from './lib'

function isLeftTruncatablePrime(n: number) {
  while (!isNaN(n)) {
    if (!isPrime(n)) {
      return false
    }
    n = truncateLeft(n)
  }
  return true
}

function isRightTruncatablePrime(n: number) {
  while (!isNaN(n)) {
    if (!isPrime(n)) {
      return false
    }
    n = truncateRight(n)
  }
  return true
}

function truncateLeft(n: number) {
  return parseInt(n.toString().substring(1), 10)
}

function truncateRight(n: number) {
  const nStr = n.toString()
  return parseInt(nStr.substring(0, nStr.length - 1), 10)
}

const bidirectionalTruncatablePrimes = (function*() {
  // single digits don't count
  let i = 10
  let count = 0
  while (count < 11) {
    if (isLeftTruncatablePrime(i) && isRightTruncatablePrime(i)) {
      count++
      yield i
    }
    i++
  }
})()

let sum = 0
time(() => {
  for (const p of bidirectionalTruncatablePrimes) {
    sum += p
  }
})
console.log(sum)

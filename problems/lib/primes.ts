import { digitSum } from './digits'

const knownPrimes = new Set<number>()
let maxCalculatedPrime = 1

export function* generatePrimes() {
  for (const p of knownPrimes) {
    yield p
  }
  for (let i = maxCalculatedPrime; true; i++) {
    if (isPrime(i)) {
      knownPrimes.add(i)
      maxCalculatedPrime = i
      yield i
    }
  }
}

export function isPrime(n: number) {
  if (knownPrimes.has(n)) {
    return true
  }
  if (n === 1) {
    return false
  }
  if (n !== 3 && digitSum(n) % 3 === 0) {
    return false
  }
  if (n >= 10) {
    const lastDigit = n % 10
    switch (lastDigit) {
      case 1:
      case 3:
      case 7:
      case 8:
      case 9:
        break
      default:
        return false
    }
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

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

export function primeSieve(bound: number): boolean[] {
  const primes = new Array(bound)
  primes[0] = false
  primes[1] = false
  primes[2] = true
  primes[3] = true
  primes[4] = false
  primes[5] = true
  primes[6] = false
  primes[7] = true
  for (let i = 8; i < bound; i++) primes[i] = i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0
  for (let i = 11; i <= bound / 2; i++) {
    if (!primes[i]) continue
    for (let j = 2; true; j++) {
      const n = i * j
      if (n > bound) {
        break
      }
      primes[n] = false
    }
  }
  return primes
}

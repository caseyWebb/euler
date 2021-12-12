import { isPrime } from './lib'

const knownPrimes = new Set<number>()
let maxCalculatedPrime = 1

function* primes() {
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

function getDistinctPrimeFactors(n: number) {
  const factors = new Set<number>()
  for (const p of primes()) {
    if (n % p === 0) {
      while (n % p === 0) {
        n /= p
      }
      factors.add(p)
      if (n === 1) {
        break
      }
    } else if (p > n) {
      return new Set<number>()
    }
  }
  return factors
}

function getConsecutiveNumbersWithDistinctFactors(numConsecutive: number, numDistinctFactors: number) {
  const sequence: number[] = []

  for (let i = 0; i < numConsecutive; i++) {
    sequence[i] = i
  }

  outer: while (true) {
    for (let i = 0; i < sequence.length; i++) {
      sequence[i]++
    }

    for (const i of sequence) {
      const primeFactors = getDistinctPrimeFactors(i)
      if (primeFactors.size !== numDistinctFactors) {
        continue outer
      }
    }

    return sequence[0]
  }
}

console.log(getConsecutiveNumbersWithDistinctFactors(4, 4))

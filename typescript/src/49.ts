import { generatePrimes, isPrime, permute } from './lib'

const primes = generatePrimes()

let terms: number[] = []

outer: for (const prime of primes) {
  if (prime.toString().length !== 4) { continue }
  if (prime === 1487) { continue }
  const permutations = new Set(permute(prime.toString().split('')).map((p) => p.join('')))
  for (const permutation of permutations) {
    const p = parseInt(permutation, 10)
    if (p <= prime) { continue }
    if (isPrime(p)) {
      const diff = p - prime
      const next = p + diff
      if (isPrime(next) && permutations.has(next.toString())) {
        terms = [prime, p, next]
        break outer
      }
    }
  }
}

console.log(terms.join(''))

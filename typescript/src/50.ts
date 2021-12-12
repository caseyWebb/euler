import { generatePrimes, isPrime, time } from './lib'

const UPPER_BOUND = 1000

let startingPrime = 0
let longestSequence = 0
let primeWithLongestSequence = 0

time(() => {
  outer: while (true) {
    const primes = generatePrimes()

    for (let i = 0; i < startingPrime; i++) {
      primes.next()
    }
    startingPrime++

    let sum = primes.next().value
    let sequenceLength = 1

    if (sum > UPPER_BOUND / 2) {
      break outer
    }

    for (const prime of primes) {
      sequenceLength++
      if (sum + prime > UPPER_BOUND) {
        break
      }

      sum += prime

      if (sequenceLength > longestSequence) {
        if (isPrime(sum)) {
          longestSequence = sequenceLength
          primeWithLongestSequence = sum
        }
      }
    }
  }
})

console.log(primeWithLongestSequence)

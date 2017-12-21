/**
 * Consider the divisors of 30: 1,2,3,5,6,10,15,30.
 * It can be seen that for every divisor d of 30, d+30/d is prime.
 *
 * Find the sum of all positive integers n not exceeding 100 000 000
 * such that for every divisor d of n, d+n/d is prime.
 */

/**
 * All numbers are divisible by 1, so 1+n (1+n/1) must be prime.
 * This means we only need to check n = p - 1
 */

import { primeSieve, time } from './lib'

const UPPER_BOUND = 100000000

let sum = 0

time(() => {
  // precompute primes
  const isPrime = primeSieve(UPPER_BOUND)

  for (let i = 1; i < UPPER_BOUND; i++) {
    if (!isPrime[i]) continue

    const n = i - 1

    for (let d1 = 1; true; d1++) {
      const d2 = n / d1
      if (d2 < d1) {
        sum += n
        break
      }
      if (d2 % 1 !== 0) {
        continue
      }
      if (!isPrime[d1 + (n / d1)] || !isPrime[d2 + (n / d2)]) {
        break
      }
    }
  }
})

console.log(sum)

/**
 *
 * Consider the fraction, n/d, where n and d are positive integers.
 * If n<d and HCF(n,d)=1, it is called a reduced proper fraction.
 *
 * If we list the set of reduced proper fractions for d ≤ 8 in ascending order of size, we get:
 *
 * 1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8
 *
 *  It can be seen that there are 3 fractions between 1/3 and 1/2.
 *
 * How many fractions lie between 1/3 and 1/2 in the sorted set of reduced proper fractions for d ≤ 12,000?
 */

import { generatePrimes, primeSieve, time } from './lib'

const MAX_DENOMINATOR = 12000
const isPrime = primeSieve(MAX_DENOMINATOR / 2)
let count = 0

function isProperFraction(n: number, d: number) {
  if (isPrime[n]) return true // perf

  const max = Math.sqrt(d)
  for (let i = 2; i <= max; i++) {
    if (d % i === 0 && (n % i === 0 || n % (d / i) === 0)) {
      return false
    }
  }
  return true
}

time(() => {
  for (let d = 2; d <= MAX_DENOMINATOR; d++) {
    const lBound = Math.floor(d / 3) + 1
    const uBound = d / 2
    for (let n = lBound; n < uBound; n++) {
      if (isProperFraction(n, d)) count++
    }
  }
})

console.log(count)

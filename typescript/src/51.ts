import { generatePrimes, isPrime, iterateDigits, time } from './lib'

/**
 * Discovery
 *
 * Looking for 8 members, so starting with lowest must be 0, 1, or 2
 * to stay within bounds. i.e. 2, 3, 4, 5, 6, 7, 8, 9 (8 members, and
 * out of digits to use).
 *
 * Last digit obviously can't be replaced b/c it will inevitably
 * be even.
 *
 * Further, b/c digit sum !== 3 for primes and the max modulus of
 * 3 is 2, intuit that the result of replacing n digits with 0-9
 * must have no more than 2 of any remainder of 3 so that regardless
 * of the sum of the other digits, there are at least 8 possibilities.
 *
 * This code lets us find which values of n (num of substitutions)
 * have at least one result that grants at least 8 possibilities
 * for at least one ((other digits sum) % 3).
 */
// for (let j = 1; j <= 5; j++) {
//   const counts: { [k: number]: number } = {
//     0: 0,
//     1: 0,
//     2: 0
//   }
//   for (let k = 0; k <= 9; k++) {
//     counts[k * j % 3]++
//   }
//   console.log(j)
//   console.log(JSON.stringify(counts, null, 1))
// }
/**
 * We find there must be 3 repeated digits.
 */

function getPrimeFamily(n: number, digitToReplace: number) {
  // naiive, won't work if there are >= 4 occurrences of the digit to replace
  const family = []
  for (let i = digitToReplace; i <= digitToReplace + 8; i++) {
    let n2 = n
    let decimalPlace = 0
    let digitWithReplacements = 0
    while (n2 !== 0) {
      const d = n2 % 10
      if (d === digitToReplace) {
        digitWithReplacements += i * Math.pow(10, decimalPlace)
      } else {
        digitWithReplacements += d * Math.pow(10, decimalPlace)
      }
      decimalPlace++
      n2 = Math.floor(n2 / 10)
    }
    if (isPrime(digitWithReplacements)) {
      family.push(digitWithReplacements)
    }
  }
  return family
}

// console.log(getPrimeFamily(10007, 0))

time(() => {
  outer: for (const prime of generatePrimes()) {
    if (prime < 10000) { // assume we're going to need at least 5 digits
      continue
    }

    const digitCounts: { [k: number]: number } = { 0: 0, 1: 0, 2: 0 }
    // Math.floor(prime / 10) excludes the last digit since we can't replace it
    for (const digit of iterateDigits(Math.floor(prime / 10))) {
      if (digit >= 0 && digit <= 2) {
        digitCounts[digit]++
      }
    }

    const multiplums = Object
      // skip if no 0, 1, or 2 multiplum
      .entries(digitCounts)
      .filter(([_, c]) => c >= 3)
      .map(([k]) => parseInt(k, 10))

    for (const m of multiplums) {
      const primeFamily = getPrimeFamily(prime, m)
      if (primeFamily.length >= 8) {
        console.log(prime)
        break outer
      }
    }
  }
})

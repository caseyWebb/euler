import * as assert from 'assert'
import { numDigits, time } from './lib'

/**
 * The 5-digit number, 16807=75, is also a fifth power. Similarly, the 9-digit number, 134217728=89, is a ninth power.
 *
 * How many n-digit positive integers exist which are also an nth power?
 */

// x = y^n, len(x) = n

// y can not be >= 10 b/c 10^1 digit length > 1
let UPPER_BOUND = -1

time('find upper bound', () => {
  for (let y = 1; true; y++) {
    const n = 1 // min
    const x = Math.pow(y, n) // redundant, but clearer for explanation purposes
    if (numDigits(x) > n) {
      UPPER_BOUND = x
      break
    }
  }
})

assert.notEqual(UPPER_BOUND, -1)

const results: number[] = []

time('solve', () => {
  for (let y = 0; y < UPPER_BOUND; y++) {
    for (let n = 1; true; n++) {
      const x = Math.pow(y, n)
      const len = numDigits(x)
      if (n > len) { break }
      if (len === n) { results.push(x) }
    }
  }
})

console.log(results.length)

/**
 *
 * A Harshad or Niven number is a number that is divisible by the sum of its digits.
 * 201 is a Harshad number because it is divisible by 3 (the sum of its digits.)
 * When we truncate the last digit from 201, we get 20, which is a Harshad number.
 * When we truncate the last digit from 20, we get 2, which is also a Harshad number.
 * Let's call a Harshad number that, while recursively truncating the last digit, always
 * results in a Harshad number a right truncatable Harshad number.
 *
 * Also:
 * 201/3=67 which is prime.
 * Let's call a Harshad number that, when divided by the sum of its digits, results in a prime a strong Harshad number.
 *
 * Now take the number 2011 which is prime.
 * When we truncate the last digit from it we get 201, a strong Harshad number that is also right truncatable.
 * Let's call such primes strong, right truncatable Harshad primes.
 *
 * You are given that the sum of the strong, right truncatable Harshad primes less than 10000 is 90619.
 *
 * Find the sum of the strong, right truncatable Harshad primes less than 1014.
 */

/**
 * A loop 1..10e14 would take forever, instead generate Harshad numbers by starting with
 * the 2 digit Harshads, then prepending 1-9 and checking for 3 digit Harshads, and so on...
 */

import { generatePrimes, isPrime, primeSieve, time } from './lib'

const UPPER_BOUND = 10000

function digitsToNum(digits: number[]) {
  let n = 0
  for (let i = 0; i < digits.length; i++) {
    n += digits[digits.length - 1 - i] * Math.pow(10, i)
  }
  return n
}

function* generateStrongRightTruncatableHarshads(digits: number[] = []): IterableIterator<number[]> {
  if (digits.length === 13) {
    return
  }
  for (let i = 0; i <= 9; i++) {
    const newDigits = [...digits, i]
    const digitSum = newDigits.reduce((accum, d) => accum + d)
    const n = digitsToNum(newDigits)

    const isHarshad = n % digitSum === 0

    if (isHarshad) {
      if (isPrime(n / digitSum)) {
        yield newDigits
      }
      yield* generateStrongRightTruncatableHarshads(newDigits)
    }
  }
}

let s = 0

for (const digits of generateStrongRightTruncatableHarshads()) {
  for (const possibleEnd of [1, 3, 7, 9]) {
    const n = digitsToNum([...digits, possibleEnd])
    if (isPrime(n)) {
      s += n
    }
  }
}

console.log(s)

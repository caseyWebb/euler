import { generatePrimes, isPrime, time } from './lib'

// guess at first, limit after solving
const UPPER_BOUND = 8400

const TARGET = 5

function isConcatenatable(base: number, prime: number) {
  const bStr = base.toString()
  const pStr = prime.toString()
  return isPrime(parseInt(bStr + pStr, 10)) && isPrime(parseInt(pStr + bStr, 10))
}

function getConcatenatablePrimes(bases: number[]): false | number[] {
  outer: for (const prime of generatePrimes()) {
    if (prime > UPPER_BOUND) {
      break
    }
    for (const base of bases) {
      if (prime < base || !isConcatenatable(base, prime)) {
        continue outer
      }
      if (!isConcatenatable(base, prime)) {
        continue outer
      }
    }
    if (bases.length + 1 === TARGET) {
      return [...bases, prime]
    } else {
      const ps = getConcatenatablePrimes([...bases, prime])
      if (ps) {
        return ps
      }
    }
  }
  return false
}

let result: number[] = []

time(() => {
  for (const prime of generatePrimes()) {
    const _result = getConcatenatablePrimes([prime])
    if (_result) {
      result = _result
      break
    }
  }
})

console.log(result)
console.log(result.reduce((s, n) => s + n))

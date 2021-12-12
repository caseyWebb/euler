import { isPrime } from './lib'

const primes = new Set<number>()
const knownSquares = new Set<number>()
let maxCalculatedPrime = 0
const maxCalculatedSquare = 0

function* primesUpTo(n: number) {
  for (let p = maxCalculatedPrime + 1; maxCalculatedPrime < n; p++) {
    if (isPrime(p)) {
      primes.add(p)
      maxCalculatedPrime = p
    }
  }
  for (const p of primes) {
    yield p
  }
}

function* squares() {
  let i = 1
  while (true) {
    yield Math.pow(i++, 2)
  }
}

const oddComposites = (function*() {
  let i = 3
  while (true) {
    if (!isPrime(i)) {
      yield i
    }
    i += 2
  }
})()

{
  let i = oddComposites.next().value
  a: while (true) {
    b: for (const prime of primesUpTo(i)) {
      for (const square of squares()) {
        const v = prime + 2 * square
        if (v === i) {
          i = oddComposites.next().value
          continue a
        } else if (v > i) {
          continue b
        }
      }
    }
    console.log(i)
    break
  }
}

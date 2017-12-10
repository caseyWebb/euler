import { isPrime } from './lib'

let n = 1
let sideLength = 2
const primes = []

do {
  for (let j = 0; j < 4; j++) {
    if (isPrime(n)) {
      primes.push(n)
    }
    n += sideLength
  }
  sideLength += 2
} while (primes.length / (2 * sideLength + 1) > 0.10)

console.log(sideLength + 1)

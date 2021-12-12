import { isPrime, permute } from './lib'

const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1]

outer: while (true) {
  const pandigitalNumbers = permute(digits).map((sequence) => parseInt(sequence.join(''), 10))
  for (const n of pandigitalNumbers) {
    if (isPrime(n)) {
      console.log(n)
      break outer
    }
  }
  digits.shift()
}

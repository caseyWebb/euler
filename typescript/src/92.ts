import { iterateDigits, time } from './lib'

const UPPER_BOUND = 10000000

function sumDigitSquares(n: number) {
  let s = 0
  for (const d of iterateDigits(n)) {
    s += Math.pow(d, 2)
  }
  return s
}

const endIn1: { [k: number]: boolean } = {}
const endIn89: { [k: number]: boolean } = {}

function chainEndsIn89(n: number) {
  const chain = []
  while (true) {
    if (n === 1 || endIn1[n]) {
      chain.forEach((i) => endIn1[i] = true)
      return false
    }
    if (n === 89 || endIn89[n]) {
      chain.forEach((i) => endIn89[i] = true)
      return true
    }
    n = sumDigitSquares(n)
    chain.push(n)
  }
}

let count = 0

time(() => {
  for (let i = UPPER_BOUND; i > 0; i--) {
    if (chainEndsIn89(i)) {
      count++
    }
  }
})

console.log(count)

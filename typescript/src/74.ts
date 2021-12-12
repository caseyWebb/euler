import { iterateDigits } from './lib'

const UPPER_BOUND = 1000000

const FACTORIALS = [2, 3, 4, 5, 6, 7, 8, 9].reduce((accum, d) => ({
  ...accum,
  [d]: accum[d - 1] * d
}), {
  0: 1,
  1: 1
} as { [k: number]: number })

/**
 * Once we hit one of these numbers, we know the length of the rest of the chain
 */
const TERMINATORS: { [k: number]: number } = {
  169: 3,
  363601: 3,
  1454: 3,
  871: 2,
  45361: 2,
  872: 2,
  45362: 2
}

function getChainLength(n: number) {
  const sequence = []
  let len = 0
  while (true) {
    if (TERMINATORS[n]) {
      len += TERMINATORS[n]
      for (const s of sequence) {
        TERMINATORS[s] = len - TERMINATORS[s]
      }
      return len
    } else {
      sequence.push(n)
      TERMINATORS[n] = len
    }
    let sum = 0
    for (const d of iterateDigits(n)) {
      sum += FACTORIALS[d]
    }
    n = sum
    len++
  }
}

let count = 0

for (let i = UPPER_BOUND; i > 0; i--) {
  if (getChainLength(i) === 60) {
    count++
  }
}

console.log(count)

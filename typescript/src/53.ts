import { factorial } from './lib'

function getNumCombinations(n: number, r: number) {
  return factorial(n) / (factorial(r) * factorial(n - r))
}

let over1Mil = 0
for (let n = 1; n <= 100; n++) {
  for (let r = 1; r <= n; r++) {
    if (getNumCombinations(n, r) > 1000000) {
      over1Mil++
    }
  }
}

console.log(over1Mil)

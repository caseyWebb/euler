import { permute } from './lib'

const divisors = [2, 3, 5, 7, 11, 13, 17]

function hasPrimeDivisibleSubstrings(digits: number[]) {
  for (let i = 0; i < divisors.length; i++) {
    if (parseInt(digits.slice(i + 1, i + 4).join(''), 10) % divisors[i] !== 0) {
      return false
    }
  }
  return true
}

const sum = permute([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  .filter(hasPrimeDivisibleSubstrings)
  .reduce((s, n) => s + parseInt(n.join(''), 10), 0)

console.log(sum)

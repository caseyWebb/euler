import { isPalindrome } from './lib'

const lychrelNumbers: number[] = []

function isLychelNumber(n: number) {
  for (let i = 0, x = n; i < 50; i++) {
    const xRev = parseInt(x.toString().split('').reverse().join(''), 10)
    x = x + xRev
    if (isPalindrome(x)) {
      return false
    }
  }
  return true
}

for (let n = 1; n < 10000; n++) {
  if (isLychelNumber(n)) {
    console.log(n)
    lychrelNumbers.push(n)
  }
}

console.log('total:', lychrelNumbers.length)

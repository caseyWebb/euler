import { getInput } from './lib'

const knownTriangleNumbers = new Set<number>()
let maxCalculatedTriangleNumber = 0
let maxCalculatedTriangleNumberCoefficient = 0

function calculateNthTriangleNumber(n: number) {
  return .5 * n * (n + 1)
}

function isTriangleNumber(n: number) {
  while (maxCalculatedTriangleNumber < n) {
    maxCalculatedTriangleNumber = calculateNthTriangleNumber(maxCalculatedTriangleNumberCoefficient)
    maxCalculatedTriangleNumberCoefficient++
    knownTriangleNumbers.add(maxCalculatedTriangleNumber)
  }
  return knownTriangleNumbers.has(n)
}

function isTriangleWord(word: string) {
  let sum = 0
  for (const char of word) {
    sum += char.charCodeAt(0) - 64
  }
  return isTriangleNumber(sum)
}

getInput('42').then((data) => {
  const numTriangleWords = data
    .toString()
    .replace(/"/g, '')
    .split(',')
    .filter((word) => isTriangleWord(word))
    .reduce((s) => s + 1, 0)

  console.log(numTriangleWords)
})

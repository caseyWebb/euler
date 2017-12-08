import * as fs from 'fs'
import * as path from 'path'

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

fs.readFile(path.resolve(__dirname, '../input/42.txt'), (err, data) => {
  if (err) {
    throw err
  }

  const numTriangleWords = data
    .toString()
    .replace(/"/g, '')
    .split(',')
    .filter((word) => isTriangleWord(word))
    .reduce((s) => s + 1, 0)

  console.log(numTriangleWords)
})

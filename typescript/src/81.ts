import { getInput, time } from './lib'

getInput('81').then((data) => {
  const matrix = data
    .toString()
    .trim()
    .split('\n')
    .map((line) => line.split(',').map((n) => parseInt(n, 10)))

  // assume square matrix
  const size = matrix.length

  time('solve', () => {
    for (let row = 0; row < size; row++) {
      for (let column = 0; column < size; column++) {
        if (row !== 0 || column !== 0) {
          const topSum = row > 0 ? matrix[row - 1][column] : Infinity
          const leftSum = column > 0 ? matrix[row][column - 1] : Infinity
          matrix[row][column] += topSum > leftSum ? leftSum : topSum
        }
      }
    }
  })

  console.log(matrix[size - 1][size - 1])
})

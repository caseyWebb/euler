import * as path from 'path'
import * as fs from 'fs'

const triangle = fs.readFile(path.resolve(__dirname, '../input/67.txt'), (err, data) => {
  const triangle: number[][] = data
    .toString()
    .split('\n')
    .map((row) => row.split(' ').map((nStr) => parseInt(nStr)))
  
  for (let r = triangle.length - 2; r >= 0; r--) {
    for (let i = 0; i < triangle[r].length; i++) {
      triangle[r][i] += Math.max(triangle[r + 1][i], triangle[r + 1][i + 1])
    }
  }

  console.log(triangle[0][0])
})


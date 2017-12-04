import * as fs from 'fs'
import * as path from 'path'

function score(name: string) {
  return name.split('').reduce((s, c) => s + c.charCodeAt(0) - 64, 0)
}

fs.readFile(path.resolve(__dirname, '../input/22.txt'), (err, data) => {
  if (err) {
    throw err
  }

  const sum = data
    .toString()
    .replace(/"/g, '')
    .split(',')
    .sort()
    .map((n, i) => (1 + i) * score(n))
    .reduce((s, n) => s + n)
  
  console.log(sum)
})
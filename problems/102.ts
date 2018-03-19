import * as fs from 'fs'
import * as path from 'path'

type Triangle = [number, number, number, number, number, number]

const TEST_TRIANGLES: Triangle[] = [
  [-340, 495, -153, -910, 835, -947],
  [-175, 41, -421, -714, 574, -645]
]

function area(
  x1: number, y1: number,
  x2: number, y2: number,
  x3: number, y3: number
) {
  return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2)
}

function containsVertex([x1, y1, x2, y2, x3, y3]: Triangle) {
  const aTotal = area(x1, y1, x2, y2, x3, y3)
  const a1 = area(0, 0, x2, y2, x3, y3)
  const a2 = area(x1, y1, 0, 0, x3, y3)
  const a3 = area(x1, y1, x2, y2, 0, 0)
  return a1 + a2 + a3 === aTotal
}

function solve(triangles: Triangle[]) {
  console.log(triangles.filter(containsVertex).length)
}

fs.readFile(path.resolve(__dirname, '../input/102.txt'), (err, buf) => {
  if (err) throw err

  const TRIANGLES: Triangle[] = buf
    .toString()
    .split('\n')
    .map((line) => line.split(',').map((n) => parseInt(n, 10)) as Triangle)

  solve(TRIANGLES)
})

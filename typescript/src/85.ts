import { time } from './lib'

const factorials = [1]
for (let i = 1; i < 2000; i++) { factorials[i] = factorials[i - 1] * i }

function getNumRectangles(x: number, y: number) {
  // C(x + 1, 2) C(y + 1, 2)
  const cX = factorials[x + 1] / (2 * factorials[x - 1])
  const cY = factorials[y + 1] / (2 * factorials[y - 1])
  return (cX) * (cY)
}

let dist = 100 // assume if it's under 100 it's minimal. Brute force with Infinity
let area = 0

time(() => {
  for (let m = 1; m < 2000; m++) { // 2000 is the max in a 1 row rect
    for (let n = 1; n < m; n++) {
      const numRects = getNumRectangles(m, n)
      const d = Math.abs(2000000 - numRects)
      if (d < dist) {
        dist = d
        area = m * n
        return
      }
      if (numRects > 2000000) {
        break
      }
    }
  }
})

console.log(dist, area)

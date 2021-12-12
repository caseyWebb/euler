export { }

function isRightTriangle(a: number, b: number, c: number) {
  return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)
}

function getRightTrianglesWithPerimeter(p: number) {
  const solutions: Array<[number, number, number]> = []
  for (let a = 1; a <= p / 2; a++) {
    for (let b = 1; b <= a; b++) {
      const c = p - a - b
      if (isRightTriangle(a, b, c)) {
        solutions.push([a, b, c])
      }
    }
  }
  return solutions
}

let maxSolutions = 0
let maxP = 0

for (let i = 0; i <= 1000; i++) {
  const numSolutions = getRightTrianglesWithPerimeter(i).length
  if (numSolutions > maxSolutions) {
    maxSolutions = numSolutions
    maxP = i
  }
}

console.log(maxP)

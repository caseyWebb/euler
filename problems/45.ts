export { }

// function isTriangular(n: number) {
//   return Math.sqrt(8 * n + 1) % 1 === 0
// }

function getNthTriangleNumber(n: number) {
  return (n * (n + 1)) / 2
}

function isPentagonal(n: number) {
  return ((Math.sqrt(24 * n + 1) + 1) / 6) % 1 === 0
}

function isHexagonal(n: number) {
  return ((Math.sqrt(8 * n + 1) + 1) / 4) % 1 === 0
}

let i = 285

while (true) {
  i++
  const n = getNthTriangleNumber(i)
  if (isPentagonal(n) && isHexagonal(n)) {
    console.log(n)
    break
  }
}

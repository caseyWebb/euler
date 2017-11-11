let _sum: number = 0 // typescript subtleties
let sumOfSquares: number = 0

for (let i = 1; i <= 100; i++) {
  _sum += i
  sumOfSquares += Math.pow(i, 2)
}

const squaredSum = Math.pow(_sum, 2)

console.log(squaredSum - sumOfSquares)
let sum: number = 0
let sumOfSquares: number = 0

for (let i = 1; i <= 100; i++) {
  sum += i
  sumOfSquares += Math.pow(i, 2)
}

const squaredSum = Math.pow(sum, 2)

console.log(squaredSum - sumOfSquares)
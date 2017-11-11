for (const num of generateTriangleNumbers()) {
  if (getDivisors(num).length > 500) {
    console.log(num)
    break
  }
}

function* generateTriangleNumbers() {
  let i = 0
  let sum = 0
  while (true) {
    yield sum += i++
  }
}

function getDivisors(n: number) {
  const divisors: number[] = []
  for (let i = Math.floor(Math.sqrt(n)); i > 0; i--) {
    if (n % i === 0) {
      divisors.push(i, n / i)
    }
  }
  return divisors
}
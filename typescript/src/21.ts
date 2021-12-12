export { }

function getDivisors(n: number) {
  const sqrt = Math.sqrt(n)
  const divisors = [1]
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) {
      divisors.push(i)
      if (i !== sqrt) {
        divisors.push(n / i)
      }
    }
  }
  return divisors
}

function sumDivisors(n: number) {
  return getDivisors(n).reduce((sum, d) => sum + d)
}

function getAmicablePair(n: number) {
  const sum1 = sumDivisors(n)
  const sum2 = sumDivisors(sum1)
  if (n === sum2 && n !== sum1) {
    return [n, sum1]
  }
  return [0, 0]
}

const amicableNums = new Set<number>()

for (let i = 0; i < 10000; i++) {
  const [n1, n2] = getAmicablePair(i)
  amicableNums.add(n1)
  amicableNums.add(n2)
}

const sum = Array.from(amicableNums).reduce((sum, n) => sum + n)

console.log(sum)
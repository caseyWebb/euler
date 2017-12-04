export { }

const UPPER_BOUND = 28123

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

function getAbundantNumbers() {
  const ret: number[] = []
  for (let i = 1; i < UPPER_BOUND; i++) {
    if (sumDivisors(i) > i) {
      ret.push(i)
    }
  }
  return ret
}

function getAbundantSums() {
  const abundantNumbers = getAbundantNumbers()
  const ret = new Set<number>()
  for (let i = 0; i < abundantNumbers.length; i++) {
    for (let j = 0; j < abundantNumbers.length; j++) {
      ret.add(abundantNumbers[i] + abundantNumbers[j])
    }
  }
  return ret
}

function getNonAbundantSummableNums() {
  const abundantSums = getAbundantSums()
  const ret: number[] = []
  for (let i = 1; i < UPPER_BOUND; i++) {
    if (!abundantSums.has(i)) {
      ret.push(i)
    }
  }
  return ret
}


console.log(getNonAbundantSummableNums().reduce((s, n) => s + n))
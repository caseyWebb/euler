export function digitSum(n: number) {
  let sum = 0
  while (n !== 0) {
    sum += n % 10
    n = Math.floor(n / 10)
  }
  return sum
}

export function numDigits(n: number) {
  let count = 0
  while (n !== 0) {
    count++
    n = Math.floor(n / 10)
  }
  return count
}

export function getDigits(n: number) {
  const digits = []
  while (n !== 0) {
    digits.push(n % 10)
    n = Math.floor(n / 10)
  }
  return digits
}

export function* iterateDigits(n: number) {
  while (n !== 0) {
    yield n % 10
    n = Math.floor(n / 10)
  }
}

const knownPrimes = new Set<number>()
let maxCalculatedPrime = 1

export function* generatePrimes() {
  for (const p of knownPrimes) {
    yield p
  }
  for (let i = maxCalculatedPrime; true; i++) {
    if (isPrime(i)) {
      knownPrimes.add(i)
      maxCalculatedPrime = i
      yield i
    }
  }
}

export function isPrime(n: number) {
  if (n === 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

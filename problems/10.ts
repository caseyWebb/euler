let _s = 0

for (const v of primeGenerator()) {
  _s += v
}

console.log(_s)

function* primeGenerator() {
  let i = 2
  while (i < 2000000) {
    if (isPrime(i)) {
      yield i
    }
    i++
  }
}

function isPrime(n: number) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
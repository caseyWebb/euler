const primes = primeGenerator()
let v = 0

for (let i = 0; i < 10001; i++) {
  v = primes.next().value
}

console.log(v)

function* primeGenerator() {
  let i = 2
  while (true) {
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
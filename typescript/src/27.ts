export { }

function isPrime(n: number) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

let best = { a: 0, b: 0, n: 0 }

for (let a = -999; a < 1000; a++) {
  for (let b = -1000; b <= 1000; b++) {
    const quadratic = (_n: number) => Math.pow(_n, 2) + (a * _n) + b
    let n = 0
    while (isPrime(Math.abs(quadratic(n)))) {
      n++
    }
    if (n > best.n) {
      best = { a, b, n }
    }
  }
}

console.log(best, best.a * best.b)

const TARGET = 600851475143

for (let i = Math.floor(Math.sqrt(TARGET)); true; i--) {
  if (!isFactor(i)) {
    continue
  }
  if (isPrime(i)) {
    console.log(i)
    break
  }
}

function isFactor(n: number) {
  return TARGET % n === 0
}

function isPrime(n: number) {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
export { }

const MIL = 1000000
let numCircularPrimes = 0

function isPrime(n: number) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

function rotate(n: number, i: number) {
  const nStr = n.toString()
  const head = nStr.slice(0, i)
  const tail = nStr.slice(i)
  return parseInt(tail + head, 10)
  // const [begin, ...rest] = n.toString()
  // return parseInt([...rest, begin].join(''), 10)
}

function isCircularPrime(n: number) {
  const numDigits = n.toString().length
  for (let i = 0; i <= numDigits; i++) {
    if (!isPrime(rotate(n, i))) {
      return false
    }
  }
  return true
}

for (let i = 2; i < MIL; i++) {
  if (isCircularPrime(i)) {
    numCircularPrimes++
  }
}

console.log(numCircularPrimes)

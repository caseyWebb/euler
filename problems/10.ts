import { isPrime, time } from './lib'

function* generatePrimes() {
  let i = 2
  while (i < 2000000) {
    if (isPrime(i)) {
      yield i
    }
    i++
  }
}

let _s = 0
time(() => {
  for (const v of generatePrimes()) {
    _s += v
  }
})
console.log(_s)

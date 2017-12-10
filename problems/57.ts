import { BigNum, time } from './lib'

function * generateConvergentSeries() {
  let numerator = new BigNum(1)
  let denominator = new BigNum(2)

  while (true) {
    yield [BigNum.sum(numerator, denominator), denominator]

    const tmp = numerator
    numerator = denominator
    denominator = BigNum.sum(BigNum.product(denominator, new BigNum(2)), tmp)
  }
}

const series = generateConvergentSeries()
let longerNumerator = 0

time(() => {
  for (let i = 0; i < 1000; i++) {
    const [numerator, denominator] = series.next().value
    if (numerator.digits.length > denominator.digits.length) {
      longerNumerator++
    }
  }
})

console.log(longerNumerator)

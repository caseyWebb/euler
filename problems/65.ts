import { BigNum } from './lib'

function* generateSequence() {
  let i = 2

  while (true) {
    yield 1
    yield i
    yield 1
    i += 2
  }
}

function* generateConvergentNumerators() {
  const sequence = generateSequence()
  let n = new BigNum(2)
  let d = new BigNum(1)

  while (true) {
    yield n
    const tmp = d
    const c = sequence.next().value
    d = n
    n = BigNum.sum(BigNum.product(BigNum.fromInt(c), d), tmp)
  }
}

const series = generateConvergentNumerators()

for (let i = 0; i < 99; i++) {
  series.next()
}

console.log(series.next().value.digitSum())

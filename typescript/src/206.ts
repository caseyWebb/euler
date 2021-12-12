import { BigNum, getDigits } from './lib'

// harder than it needs to be because of JS's lack of precision and floating point nonsense

const LOWER_BOUND = BigNum.fromInt(1020304050607080900).sqrt()
const TWO = BigNum.fromInt(2)

let i = LOWER_BOUND

outer: while (true) {
  const res = BigNum.pow(i, TWO)
  const digits = res.digits.reverse()

  for (let j = 2; j < digits.length; j += 2) {
    const shouldBe = ((j / 2) + 1) % 10
    const is = digits[j]

    if (is !== shouldBe) {
      const prevDigit = digits[j - 1]
      const trailing = []
      for (let k = shouldBe + 1; k <= 9; k++) {
        trailing.push(...[0, k])
      }
      trailing.push(...[0, 0])
      const ds = prevDigit + 1 > 9
        ? [...digits.slice(0, j - 2), shouldBe, 0, shouldBe, ...trailing].reverse()
        : [...digits.slice(0, j - 1), prevDigit + 1, shouldBe, ...trailing].reverse()
      const n = new BigNum(...ds)
      i = BigNum.sum(BigNum.fromInt(1), n.sqrt())
      continue outer
    }
  }

  console.log(i.toString())

  break
}

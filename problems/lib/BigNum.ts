function isDefined(x: any) {
  return typeof x !== 'undefined'
}

export class BigNum {
  public digits: number[]

  constructor(...digits: number[]) {
    this.digits = digits
  }

  public toString() {
    return [...this.digits].reverse().join('')
  }

  public loop(fn: () => void) {
    for (let i = 0; i < this.digits.length; i++) {
      const digit = this.digits[i]
      const multiplier = Math.pow(10, i)
      for (let j = 0; j < digit * multiplier; j++) {
        fn()
      }
    }
  }

  public static fromInt(n: number) {
    return new BigNum(...n.toString().split('').reverse().map((d) => parseInt(d, 10)))
  }

  public static sum(x: BigNum, y: BigNum): BigNum {
    const result: number[] = []
    let remainder = 0

    let i = 0
    while (isDefined(x.digits[i]) || isDefined(y.digits[i]) || remainder) {
      const n = (x.digits[i] || 0) + (y.digits[i] || 0) + remainder
      if (n > 9) {
        result[i] = n - 10
        remainder = 1
      } else {
        result[i] = n
        remainder = 0
      }
      i++
    }

    return new BigNum(...result)
  }

  public static product(x: BigNum, y: BigNum): BigNum {
    let result = new BigNum(0)

    // lazy, rewrite if/when it matters
    x.loop(() => result = BigNum.sum(result, y))

    return result
  }

  public static pow(x: BigNum, y: BigNum): BigNum {
    let result = new BigNum(1)

    y.loop(() => result = BigNum.product(x, result))

    return result
  }
}

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
}
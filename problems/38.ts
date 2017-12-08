import { time } from './lib'

function isPandigital(nStr: string) {
  const digits = new Set<string>()
  for (let i = 0; i < nStr.length; i++) {
    const char = nStr[i]
    if (char === '0') {
      return false
    }
    digits.add(char)
    if (digits.size !== i + 1) {
      return false
    }
  }
  return true
}

function getMaxPandigitalConcatenatedProduct() {
  const UPPER_BOUND = 987654321
  let i = 0
  let maxPandigital = ''
  outer: while (true) {
    let multiplier = 1
    let concatenatedProduct = ''
    while (true) {
      concatenatedProduct += i * multiplier
      const p = parseInt(concatenatedProduct, 10)
      if (p > UPPER_BOUND && multiplier === 2) {
        break outer
      }
      if (!isPandigital(concatenatedProduct)) {
        break
      }
      if (concatenatedProduct.length === 9) {
        maxPandigital = concatenatedProduct
        break
      }
      multiplier++
    }
    i++
  }
  return maxPandigital
}

let max = ''
time(() => max = getMaxPandigitalConcatenatedProduct())
console.log(max)

export { }

function calculatePreciseFactorial(factorial: number) {
  const number = [1]
  for (let factor = 1; factor <= factorial; factor++) {
    const prevLen = number.length
    let remainder = 0

    for (let j = 0; j <= prevLen || remainder; j++) {
      let digit = number[j] || 0
  
      digit *= factor
      digit += remainder
  
      if (digit > 9) {
        remainder = Math.floor(digit / 10)
        digit %= 10
      } else {
        remainder = 0
      }

      number[j] = digit
    }
  }

  return number
}

// console.log(calculatePreciseFactorial(100))

console.log(calculatePreciseFactorial(100).reduce((s, d) => s + d))
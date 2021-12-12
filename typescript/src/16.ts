export { }

function calculatePrecisePowerOf2(pow: number) {
  const number = [1]
  for (let i = 0; i < pow; i++) {
    const prevLen = number.length
    let remainder = 0

    for (let j = 0; j <= prevLen; j++) {
      let digit = number[j] || 0
  
      digit = 2 * digit + remainder
  
      if (digit > 9) {
        digit %= 10
        remainder = 1
      } else {
        remainder = 0
      }

      number[j] = digit
    }
  }

  return number
}

const sum = calculatePrecisePowerOf2(1000).reduce((s, d) => s + d)

// function sumDigits(n: number) {
//   let sum = 0
//   let pos = Math.ceil(Math.log10(n))
//   while (pos >= 0) {
//     const truncated = Math.floor(n % Math.pow(10, pos + 1))
//     const place = Math.pow(10, pos)
//     const digit = Math.floor(truncated / place)
//     sum += digit
//     pos--
//   }
//   return sum
// }

// const sum = sumDigits(Math.pow(2, 1000))

console.log(sum)
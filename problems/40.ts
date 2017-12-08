export { }

const champernownesConstantDigits = (function*() {
  let i = 1
  while (true) {
    for (const digit of i.toString()) {
      yield parseInt(digit, 10)
    }
    i++
  }
})()

let product = 1

for (let i = 1; i <= 1000000; i++) {
  const d = champernownesConstantDigits.next().value
  if (Math.log10(i) % 1 === 0) {
    product *= d
  }
}

console.log(product)

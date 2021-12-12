export { }

const UPPER_BOUND = factorial(9) * 7

const DIGIT_FACTORIALS: { [k: string]: number } = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((accum, d) => ({
  ...accum,
  [d.toString()]: factorial(d)
}), {})

function factorial(n: number) {
  let ret = 1
  while (n > 1) {
    ret *= n--
  }
  return ret
}

let sum = 0

for (let i = 3; i < UPPER_BOUND; i++) {
  const digitFactorialSum = i
    .toString()
    .split('')
    .reduce((s, d) => s + DIGIT_FACTORIALS[d], 0)

  if (digitFactorialSum === i) {
    sum += i
  }
}

console.log(sum)

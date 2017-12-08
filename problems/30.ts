export { }

const UPPER_BOUND = 6 * Math.pow(9, 5)

const DIGIT_POWERS: { [k: string]: number } = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((accum, d) => ({
  ...accum,
  [d.toString()]: Math.pow(d, 5)
}), {})

let sum = 0

for (let i = 2; i < UPPER_BOUND; i++) {
  const digitPowSum = i
    .toString()
    .split('')
    .map((d) => DIGIT_POWERS[d])
    .reduce((accum, d) => accum + d)

  if (i === digitPowSum) {
    sum += i
  }
}

console.log(sum)

import { getInput } from './lib'

getInput('99').then((data) => {
  const pairs = data
    .toString()
    .trim()
    .split('\n')
    .map((line) => line
      .split(',')
      .map((n) => parseInt(n, 10)))

  let max = 0
  let maxLine = 0

  for (let i = 0; i < pairs.length; i++) {
    const [a, c] = pairs[i]
    const v = c * Math.log(a)

    if (v > max) {
      max = v
      maxLine = i + 1
    }
  }

  console.log(maxLine)
})

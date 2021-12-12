import { getInput } from './lib'

const triangle = getInput('67').then((data) => {
  const t: number[][] = data
    .toString()
    .split('\n')
    .map((row) => row.split(' ').map((nStr) => parseInt(nStr, 10)))

  for (let r = t.length - 2; r >= 0; r--) {
    for (let i = 0; i < t[r].length; i++) {
      t[r][i] += Math.max(t[r + 1][i], t[r + 1][i + 1])
    }
  }

  console.log(t[0][0])
})

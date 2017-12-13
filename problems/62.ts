import { getDigits, numDigits, permute, time } from './lib'

const cubes: { [k: string]: number[] } = {}
let result: number[] = []

time('generate cubes', () => {
  for (let i = 2; true; i++) {
    const cube = Math.pow(i, 3)
    const sortedDigits = getDigits(cube).sort().join('')
    if (!cubes[sortedDigits]) {
      cubes[sortedDigits] = []
    }
    cubes[sortedDigits].push(cube)
    if (cubes[sortedDigits].length === 5) {
      result = cubes[sortedDigits]
      break
    }
  }
})

console.log(result)

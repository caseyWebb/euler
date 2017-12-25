import * as fs from 'fs'
import * as path from 'path'

const denominations: { [k: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50, // tslint:disable-line object-literal-sort-keys
  C: 100,
  D: 500,
  M: 1000
}

function parseNumeral(numeral: string) {
  let value = 0
  for (let i = 0; i < numeral.length; i++) {
    const n = numeral[i]
    const nNext = i !== numeral.length - 1 ? numeral[i + 1] : null
    if (
      (n === 'I' && (nNext === 'V' || nNext === 'X')) ||
      (n === 'X' && (nNext === 'L' || nNext === 'C')) ||
      (n === 'C' && (nNext === 'D' || nNext === 'M'))
    ) {
      value += denominations[nNext] - denominations[n]
      i++
    } else {
      value += denominations[n]
    }
  }
  return value
}

function toNumeral(value: number) {
  let numeral = ''
  while (value >= 1000) {
    numeral += 'M'
    value -= 1000
  }
  if (value >= 900) {
    numeral += 'CM'
    value -= 900
  } else if (value < 500 && value >= 400) {
    numeral += 'CD'
    value -= 400
  } else if (value >= 500) {
    numeral += 'D'
    value -= 500
  }
  while (value >= 100) {
    numeral += 'C'
    value -= 100
  }
  if (value >= 90) {
    numeral += 'XC'
    value -= 90
  } else if (value < 50 && value >= 40) {
    numeral += 'XL'
    value -= 40
  } else if (value >= 50) {
    numeral += 'L'
    value -= 50
  }
  while (value >= 10) {
    numeral += 'X'
    value -= 10
  }
  if (value >= 9) {
    numeral += 'IX'
    value -= 9
  } else if (value < 5 && value >= 4) {
    numeral += 'IV'
    value -= 4
  } else if (value >= 5) {
    numeral += 'V'
    value -= 5
  }
  while (value >= 1) {
    numeral += 'I'
    value -= 1
  }
  return numeral
}

fs.readFile(path.resolve(__dirname, '../input/89.txt'), (err, buf) => {
  if (err) throw err

  const ret = buf
    .toString()
    .trim()
    .split('\n')
    .map((numeral) => {
      const val = parseNumeral(numeral)
      const minimal = toNumeral(val)
      if (minimal.length < numeral.length) {
        console.log(val, numeral, minimal)
      } else if (minimal.length > numeral.length) {
        throw new Error('I fucked up')
      }
      return numeral.length - minimal.length
    })
    .reduce((sum, diff) => sum + diff)

  console.log(ret)
})

import { generatePrimes } from './lib'

const TARGET_RATIO = 15499 / 94744

function phi(n: number, factors: number[]) {
  let ret = n
  for (const factor of factors) {
    ret *= 1 - 1 / factor
  }
  return ret
}

function getRatio(d: number, dFactors: number[]) {
  return phi(d, dFactors) / (d - 1)
}

{
  const factors = []
  let d = 2
  for (const prime of generatePrimes()) {
    const dNext = d * prime
    const ratio = getRatio(dNext, [...factors, prime])
    if (ratio < TARGET_RATIO) {
      break
    }
    factors.push(prime)
    d = dNext
  }

  let minD = Infinity

  for (const factor of factors) {
    let i = 1
    while (true) {
      const dTmp = d * Math.pow(factor, i)
      const ratio = getRatio(dTmp, factors)
      if (ratio < TARGET_RATIO) {
        if (dTmp < minD) {
          minD = dTmp
        }
        break
      }
      i++
    }
  }

  console.log(minD)
}

import * as assert from 'assert'
import * as Benchmark from 'benchmark'
import { primeSieve } from './lib'

assert.equal(solution1(), 232792560)
assert.equal(solution2(), 232792560)

const bench = new Benchmark.Suite()

bench.add('original', solution1)
bench.add('optimized', solution2)
bench.on('cycle', (e: any) => {
  if (e.target.error) {
    console.error(e.target.error)
    process.exit(1)
    return
  }
  console.log(e.target.toString())
})
bench.run()

function solution1() {
  const MAX = 20

  function divisibleBy1ThroughMax(n: number) {
    // continuation of stupid heuristic. don't worry about 2, start at 3
    for (let i = 3; i <= MAX; i++) {
      if (n % i !== 0) {
        return false
      }
    }
    return true
  }

  {
    let i = MAX
    while (true) {
      if (divisibleBy1ThroughMax(i)) {
        return i
      }
      i += 20 // stupid heuristic, skip odd numbers
    }
  }
}

function solution2() {
  const primes = primeSieve(20)
    .map((isPrime, n) => ({ n, isPrime }))
    .filter(({ isPrime }) => isPrime)
    .map(({ n }) => n)

  function getPrimeFactors(n: number) {
    const ret: { [k: number]: number } = {}
    for (const prime of primes) {
      while (n % prime === 0) {
        ret[prime] = ret[prime] || 0
        ret[prime]++
        n /= prime
        if (n === 1) return ret
      }
    }
    return ret // for TS, never actually hit
  }

  const factorSets: Array<{ [k: string]: number }> = []

  for (let i = 2; i <= 20; i++) factorSets.push(getPrimeFactors(i))

  const primeFactors = factorSets.reduce((accum, v) => {
    Object.keys(v).forEach((k) => {
      if (!accum[k] || v[k] > accum[k]) accum[k] = v[k] 
    })
    return accum
  })

  return Object
    .keys(primeFactors)
    .map((i) => parseInt(i) ** primeFactors[i])
    .reduce((accum, v) => accum * v)
}
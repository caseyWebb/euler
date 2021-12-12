import * as Benchmark from 'benchmark'
import { primeSieve } from './lib'

const bench = new Benchmark.Suite()

bench.add('original', solution1)
bench.add('optimized', solution2)
bench.add('really optimized', solution3)
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
  const TARGET = 600851475143
  function isFactor(n: number) {
    return TARGET % n === 0
  }
  function isPrime(n: number) {
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true
  }
  let max = 0
  for (let i = Math.floor(Math.sqrt(TARGET)); true; i--) {
    if (!isFactor(i)) {
      continue
    }
    if (isPrime(i)) {
      max = i
      break
    }
  }
  return max
}

function solution2() {
  const primes = primeSieve(7000)
    .map((isPrime, i) => ({ i, isPrime }))
    .filter(({ isPrime }) => isPrime)
    .map(({ i }) => i)
  let n = 600851475143

  for (const prime of primes) {
    while (n % prime === 0) n /= prime
    if (n === 1) return prime
  }

  throw new Error('Prime sieve value set too low')
}

function solution3() {
  let n = 600851475143
  for (let i = 2; true; i++) {
    while (n % i === 0) n /= i
    if (n === 1) return i
  }
}

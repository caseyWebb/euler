import * as assert from 'assert'
import * as Benchmark from 'benchmark'

assert.equal(solution1(), 104743)

const bench = new Benchmark.Suite()

bench.add('original', solution1)
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
  function isPrime(n: number) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true
  }

  let count = 0
  let i = 1
  while (i++) {
    if (isPrime(i)) {
      if (++count === 10001) return i
    }
  }
}
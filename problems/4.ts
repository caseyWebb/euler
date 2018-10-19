import * as assert from 'assert'
import * as Benchmark from 'benchmark'

assert.equal(solution1(), 906609)
assert.equal(solution2(), 906609)

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

function isPalindrome(_n: number) {
  const n = _n.toString()
  for (let i = 0; i <= n.length / 2; i++) {
    if (n[i] !== n[n.length - 1 - i]) {
      return false
    }
  }
  return true
}

function solution1() {
  let max: number = 0
  outer: for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      const p = i * j
      if (p > max) {
        if (isPalindrome(p)) {
          max = p
          continue outer
        }
      }
    }
  }
  return max
}

function solution2() {
  let max: number = 0
  outer: for (let i = 999; i > 99; i--) {
    for (let j = 999; j > i; j--) {
      const p = i * j
      if (p > max) {
        if (isPalindrome(p)) {
          max = p
          continue outer
        }
      } else if (j === 999) {
        return max
      } else {
        continue outer
      }
    }
  }
}
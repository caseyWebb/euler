import * as Benchmark from 'benchmark'

const bench = new Benchmark.Suite()

bench.add('original', solution1)
bench.add('optimized', solution2)
bench.on('cycle', (e: any) => console.log(String(e.target)))
bench.run()

function solution1() {
  let s = 0
  for (const n of evenFibsNotExceeding4M()) {
    s += n
  }
  return s
}

function solution2() {
  let s = 0
  let n1 = 0
  let n2 = 1
  while (n1 <= 4000000) {
    const nextFib = n1
    n1 = n2
    n2 = n1 + nextFib
    if (nextFib % 2 === 0) s += nextFib
  }
  return s
}

function* evenFibsNotExceeding4M() {
  let n1 = 0
  let n2 = 1
  while (n1 <= 4000000) {
    if (n1 % 2 === 0) yield n1
    const tmp = n1
    n1 = n2
    n2 = n1 + tmp
  }
}

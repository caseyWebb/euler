import * as Benchmark from 'benchmark'

const bench = new Benchmark.Suite()

bench.add('original', () => {
  let sum: number = 0
  for (let v = 1; v < 1000; v++) {
    if (v % 3 === 0 || v % 5 === 0) {
      sum += v
    }
  }
  return sum
})

bench.add('optimized', () => {
  let sum = 0
  let i = 3
  do {
    sum += i
    i += 3
  } while (i < 1000)
  i = 5
  do {
    if (i % 3 !== 0) sum += i
    i += 5
  } while (i < 1000)
  return sum
})

bench
  .on('cycle', (e: any) => console.log(String(e.target)))
  .run()

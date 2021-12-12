import { time } from './lib'

const figurateNumberHeads: { [k: string]: { [k: number]: Set<number> } } = {}

function populate(figure: number, fn: (i: number) => number) {
  for (let i = 0; true; i++) {
    const n = fn(i)
    if (n >= 10000) {
      break
    } else if (n > 1000) {
      const nStr = n.toString()
      const head = nStr.slice(0, 2)
      if (!figurateNumberHeads[head]) {
        figurateNumberHeads[head] = {}
      }
      if (!figurateNumberHeads[head][figure]) {
        figurateNumberHeads[head][figure] = new Set()
      }
      figurateNumberHeads[head][figure].add(n)
    }
  }
}

function findCycle(
  startHead: string,
  prevTail: string,
  foundFigures: Set<number>,
  set: Set<number>
): false | Set<number> {
  if (!figurateNumberHeads[prevTail]) {
    return false
  }
  for (const _figure of Object.keys(figurateNumberHeads[prevTail])) {
    const figure = parseInt(_figure, 10)
    if (foundFigures.has(figure)) {
      continue
    }
    for (const n of figurateNumberHeads[prevTail][figure]) {
      const nStr = n.toString()
      const nHead = nStr.slice(0, 2)
      const nTail = nStr.slice(2)
      const newlyFound = new Set([...Array.from(foundFigures), figure])
      const newSet = new Set([...Array.from(set), n])
      if (newSet.size === 6 && nTail === startHead) {
        return newSet
        // process.exit()
      } else {
        const c = findCycle(startHead, nTail, newlyFound, newSet)
        if (c) {
          return c
        }
      }
    }
  }
  return false
}

time('populating numbers', () => {
  populate(3, (n) => (n * (n + 1)) / 2)
  populate(4, (n) => Math.pow(n, 2))
  populate(5, (n) => (n * (3 * n - 1)) / 2)
  populate(6, (n) => n * (2 * n - 1))
  populate(7, (n) => (n * (5 * n - 3)) / 2)
  populate(8, (n) => n * (3 * n - 2))
})

console.log('')

let result = new Set()

time('find set', () => {
  outer: for (let _head = 10; _head <= 100; _head++) {
    const head = _head.toString()
    if (figurateNumberHeads[head]) {
      for (const _figure of Object.keys(figurateNumberHeads[head])) {
        const figure = parseInt(_figure, 10)
        for (const n of figurateNumberHeads[head][figure]) {
          const nStr = n.toString()
          const nHead = nStr.slice(0, 2)
          const nTail = nStr.slice(2)
          const res = findCycle(nHead, nTail, new Set([figure]), new Set([n]))
          if (res) {
            result = res
            break outer
          }
        }
      }
    }
  }
})

console.log('\n', result, '\n\n', Array.from(result).reduce((s, n) => s + n), '\n')

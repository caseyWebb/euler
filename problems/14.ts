export { }

function* collatz(n: number) {
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2
    } else {
      n = 3 * n + 1
    }
    yield n
  }
}

const MIL = 1000000
let longestChainLength = 0
let longestChainStart = MIL

for (let i = MIL; i > 0; i--) {
  let len = 1
  for (const n of collatz(i)) {
    len++
  }
  if (len > longestChainLength) {
    longestChainLength = len
    longestChainStart = i
  }
}

console.log(longestChainStart)
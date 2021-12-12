export { }

function calculateCycle(num: number) {
  const remainders: number[] = []
  let dividend: number = 1

  while (true) {
    if (dividend >= num && dividend % num === 0) {
      return 0
    } else if (dividend < num) {
      dividend *= 10
      remainders.push(0)
    } else {
      const remainder = dividend % num
      if (remainders.indexOf(remainder) > -1) {
        // ignore non-repeating prefix
        return remainders.length - remainders.indexOf(remainder)
      } else {
        remainders.push(remainder)
        dividend = remainder * 10
      }
    }
  }
}

let longestCycle = 1
let numWithLongestCycle = 1

for (let i = 1; i < 1000; i++) {
  const cycle = calculateCycle(i)
  if (cycle > longestCycle) {
    longestCycle = cycle
    numWithLongestCycle = i
  }
}


console.log(numWithLongestCycle)
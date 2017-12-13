/**
 * Altered version of 31, coin counting
 */

export { }

function numSummations(n: number, max = n - 1) {
  if (n === 0) {
    return 1
  }

  let summations = 0

  for (let i = 1; i <= max; i++) {
    if (n >= i) {
      summations += numSummations(n - i, i)
    }
  }

  return summations
}

console.log(numSummations(100))

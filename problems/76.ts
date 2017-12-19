/**
 * Altered version of 31, coin counting
 */

export { }

function numSummations(n: number, max: number) {
  let summations = 0

  for (let i = 1; i <= n && i <= max; i++) {
    if (n - i === 0) {
      summations++
    } else {
      summations += numSummations(n - i, i)
    }
  }

  return summations
}

console.log(numSummations(100, 99))

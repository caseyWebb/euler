export { }

function isPentagonal(n: number) {
  return ((Math.sqrt(24 * n + 1) + 1) / 6) % 1 === 0
}

function getNthPentagonal(n: number) {
  return (n * (3 * n - 1)) / 2
}

let minDiff = Infinity
let PK = 0
let PJ = 0

for (let k = 1; k < 10000; k++) {
  const pK = getNthPentagonal(k)
  for (let j = k - 1; j > 0; j--) {
    const pJ = getNthPentagonal(j)
    const sum = pK + pJ
    const diff = Math.abs(pK - pJ)
    if (isPentagonal(sum) && isPentagonal(diff)) {
      if (diff < minDiff) {
        minDiff = diff
        PK = pK
        PJ = pJ
      }
    }
  }
}

console.log(PK, PJ, minDiff)

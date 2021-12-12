export { }

const coins = [1, 2, 5, 10, 20, 50, 100, 200]

function numCoinCombos(n: number, maxCoinValue = 200) {
  if (n === 0) {
    return 1
  }

  let combos = 0

  for (const coin of coins) {
    if (coin > maxCoinValue) {
      break
    }
    if (n >= coin) {
      combos += numCoinCombos(n - coin, coin)
    }
  }

  return combos
}

console.log(numCoinCombos(200))

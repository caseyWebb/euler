let max: number = 0

outer: for (let i = 999; i > 99; i--) {
  for (let j = 999; j > 99; j--) {
    const p = i * j
    if (p > max) {
      continue outer
    }
    if (isPalindrome(p)) {
      max = p
    }
  }
}

console.log(max)

function isPalindrome(_n: number) {
  const n = _n.toString()
  for (let i = 0; i <= n.length / 2; i++) {
    if (n[i] !== n[n.length - 1 - i]) {
      return false
    }
  }
  return true
}
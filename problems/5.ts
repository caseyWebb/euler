const MAX = 20
let i = MAX

while (true) {
  if (divisibleBy1ThroughMax(i)) {
    console.log(i)
    break
  }
  i += 2 // stupid heuristic, skip odd numbers
}

function divisibleBy1ThroughMax(n: number) {
  // continuation of stupid heuristic. don't worry about 2, start at 3
  for (let i = 3; i <= MAX; i++) {
    if (n % i !== 0) {
      return false
    }
  }
  return true
}
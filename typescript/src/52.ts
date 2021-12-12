export { }

let i = 1

function getDigits(n: number) {
  return n.toString().split('')
}

function isPermutation(a: number, b: number) {
  const aDigits = getDigits(a).sort()
  const bDigits = getDigits(b).sort()
  if (aDigits.length !== bDigits.length) {
    return false
  }
  for (let j = 0; j < aDigits.length; j++) {
    if (aDigits[j] !== bDigits[j]) {
      return false
    }
  }
  return true
}

outer: while (true) {
  for (let j = 2; j <= 6; j++) {
    const multiple = i * j
    if (!isPermutation(i, multiple)) {
      i++
      continue outer
    }
  }

  break
}

console.log(i)

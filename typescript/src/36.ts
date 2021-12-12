export { }

const MIL = 1000000
let sum = 0

function isPalindrome(n: number, base: number) {
  const nStr = n.toString(base)
  for (let i = 0; i < nStr.length / 2; i++) {
    if (nStr[i] !== nStr[nStr.length - 1 - i]) {
      return false
    }
  }
  return true
}

for (let i = 0; i < MIL; i++) {
  if (isPalindrome(i, 10) && isPalindrome(i, 2)) {
    sum += i
  }
}

console.log(sum)

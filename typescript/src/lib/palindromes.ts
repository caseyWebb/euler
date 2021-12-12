export function isPalindrome(x: number | string): boolean {
  const str = typeof x === 'string' ? x : x.toString()
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}

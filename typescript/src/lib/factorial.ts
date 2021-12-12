const known = new Map<number, number>()

export function factorial(n: number) {
  if (known.has(n)) {
    return known.get(n) as number
  }
  let sum = 1
  let i = 2
  while (i <= n) {
    sum *= i
    known.set(i, sum)
    i++
  }
  return sum
}

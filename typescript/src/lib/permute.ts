export function permute<T>(ds: T[]): T[][] {
  if (ds.length === 1) {
    return [[ds[0]]]
  }

  const sequences: T[][] = []
  for (const digit of ds) {
    const i = ds.indexOf(digit)
    const restDigits = [...ds.slice(0, i), ...ds.slice(i + 1)]
    const restDigitPermutations = permute(restDigits)
    for (const permutation of restDigitPermutations) {
      sequences.push([digit, ...permutation])
    }
  }

  return sequences
}

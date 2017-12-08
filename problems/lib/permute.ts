export function permute(ds: any[]) {
  if (ds.length === 1) {
    return [[ds[0]]]
  }

  const sequences: number[][] = []
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

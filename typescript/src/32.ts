export { }

const products = new Set<number>()

function permute(digits: number[]) {
  if (digits.length === 1) {
    return [[digits[0]]]
  }

  const sequences: number[][] = []
  for (const digit of digits) {
    const i = digits.indexOf(digit)
    const restDigits = [...digits.slice(0, i), ...digits.slice(i + 1)]
    const restDigitPermutations = permute(restDigits)
    for (const permutation of restDigitPermutations) {
      sequences.push([digit, ...permutation])
    }
  }

  return sequences
}

function calculateExpressions(sequence: number[]) {
  for (let i = 1; i < sequence.length - 1; i++) {
    for (let j = i + 1; j < sequence.length - i; j++) {
      const multiplicand = parseInt(sequence.slice(0, i).join(''), 10)
      const multiplier = parseInt(sequence.slice(i, j).join(''), 10)
      const product = parseInt(sequence.slice(j).join(''), 10)
      if (multiplicand * multiplier === product) {
        products.add(product)
      }
    }
  }
}

const pandigitalSequences = permute([1, 2, 3, 4, 5, 6, 7, 8, 9])

for (const sequence of pandigitalSequences) {
  calculateExpressions(sequence)
}

console.log(Array.from(products).reduce((sum, p) => sum + p))

export { }

const words = new Map<number, string>([
  [0, ''],
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine'],
  [10, 'ten' ],
  [11, 'eleven'],
  [12, 'twelve'],
  [13, 'thirteen'],
  [14, 'fourteen'],
  [15, 'fifteen'],
  [16, 'sixteen'],
  [17, 'seventeen'],
  [18, 'eighteen'],
  [19, 'nineteen'],
  [20, 'twenty'],
  [30, 'thirty'],
  [40, 'forty'],
  [50, 'fifty'],
  [60, 'sixty'],
  [70, 'seventy'],
  [80, 'eighty'],
  [90, 'ninety']
])

function toEnglish(n: number) {
  const thousands = Math.floor(n / 1000)
  n %= 1000
  const hundreds = Math.floor(n / 100)
  n %= 100
  const tens = Math.floor(n / 10)
  n %= 10
  const ones = n % 10
  let str = ''

  if (thousands > 0) {
    str += words.get(thousands) + 'thousand'
  }
  if (hundreds > 0) {
    str += words.get(hundreds) + 'hundred'
  }
  if ((thousands > 0 || hundreds > 0) && (tens > 0 || ones > 0)) {
    str += 'and'
  }
  if (words.has(10 * tens + ones)) {
    str += words.get(10 * tens + ones)
  } else {
    str += '' + words.get(10 * tens) + words.get(ones)
  }
  return str
}

let sum = 0

for (let i = 1; i <= 1000; i++) {
  sum += toEnglish(i).length
}

console.log(sum)

// https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Continued_fraction_expansion

export { }

const UPPER_BOUND = 10000

let numOdd = 0

for (let s = 2; s <= UPPER_BOUND; s++) {
  const sRt = Math.floor(Math.sqrt(s))
  const triplets = new Set<string>()
  let pLen = 0
  let m = 0
  let d = 1
  let a = sRt

  // perfect square
  if (Math.sqrt(s) % 1 === 0) {
    continue
  }

  while (true) {
    triplets.add([m, d, a].join())
    m = d * a - m
    d = (s - m * m) / d
    a = Math.floor((sRt + m) / d)
    if (!triplets.has([m, d, a].join())) {
      pLen++
    } else {
      break
    }
  }

  if (pLen % 2 === 1) {
    numOdd++
  }
}

console.log(numOdd)

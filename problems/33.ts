export { }

let numerator = 1
let denominator = 1

for (let i = 10; i < 100; i++) {
  for (let j = i + 1; j < 100; j++) {
    // skip trivial examples
    if (i % 10 === 0 && j % 10 === 0) {
      continue
    }

    const iStr = i.toString()
    const jStr = j.toString()
    const j0 = jStr[0]
    const j1 = jStr[1]
    // const haveSameDigit = iStr.indexOf(j0) > -1 || iStr.indexOf(j1) > -1

    let iSimplified: number
    let jSimplified: number

    if (iStr.indexOf(j0) > -1) {
      iSimplified = parseInt(iStr.replace(j0, ''), 10)
      jSimplified = parseInt(j1, 10)
    } else if (iStr.indexOf(j1) > -1) {
      iSimplified = parseInt(iStr.replace(j1, ''), 10)
      jSimplified = parseInt(j0, 10)
    } else {
      continue
    }

    if (i / j === iSimplified / jSimplified) {
      numerator *= iSimplified
      denominator *= jSimplified
      console.log(`${i} / ${j} === ${iSimplified} / ${jSimplified}`)
    }
  }
}

function simplify(top: number, bottom: number) {
  while (true) {
    for (let i = bottom; i > 0; i--) {
      if (top % i === 0 && bottom % i === 0) {
        top /= i
        bottom /= i
        break
      }
    }
    return [top, bottom]
  }
}

console.log(`Product: ${numerator} / ${denominator}`)
console.log(simplify(numerator, denominator))

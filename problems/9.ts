for (let a = 1; a < 1000; a++) {
  for (let b = 1; b < a; b++) {
    const c = getHypotenuse(a, b)
    if (a + b + c === 1000) {
      console.log(a * b * c)
      process.exit()
    }
  }
}

function getHypotenuse(a: number, b: number) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
}
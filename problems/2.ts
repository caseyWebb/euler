let s = 0

for (const n of evenFibsNotExceeding4M()) {
  s += n
}

console.log(s)

function* evenFibsNotExceeding4M() {
  let n1: number = 0
  let n2: number = 1

  while (n1 <= 4000000) {
    if (n1 % 2 === 0) {
      yield n1
    } 
    let tmp = n1
    n1 = n2
    n2 = n1 + tmp
  }
}
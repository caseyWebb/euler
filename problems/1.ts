let sum: number = 0

for (let v = 1; v < 1000; v++) {
  if (v % 3 === 0 || v % 5 === 0) {
    sum += v
  }
}

console.log(sum)
export { }

let sum = 1
let prev = 1

for (let i = 2; i < 1001; i += 2) {
  for (let j = 0; j < 4; j++) {
    prev += i
    sum += prev
  }
}

console.log(sum)

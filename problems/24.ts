export { }

const sortedPermutations = (function* () {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  while (true) {
    yield arr

    let i = arr.length - 1
    while (i > 0 && arr[i - 1] >= arr[i]) {
      i--
    }

    let j = arr.length - 1
    while (arr[j] <= arr[i - 1]) {
      j--
    }
    
    {
      const temp = arr[i - 1]
      arr[i - 1] = arr[j]
      arr[j] = temp
    }

    // Reverse the suffix
    {
      let temp: number
      for (let j = arr.length - 1; i < j; i++ && j--) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
})()

for (let i = 0; i < 999999; i++) {
  sortedPermutations.next()
}

console.log(sortedPermutations.next().value.join(''))
import { BigNum } from './lib'

function isBouncy(n: BigNum) {
  let asc = false
  let desc = false
  for (let i = 1; i < n.digits.length; i++) {
    if (n.digits[i - 1] < n.digits[i]) {
      if (desc) {
        return true
      }
      asc = true
    } else if (n.digits[i - 1] > n.digits[i]) {
      if (asc) {
        return true
      }
      desc = true
    }
  }
}

const ONE = new BigNum(1)
let numBouncy = 0
let total = 0
let num = new BigNum(1)

while (true) {
  total++
  if (isBouncy(num)) {
    numBouncy++
  }
  const ratio = numBouncy / total
  if (ratio === .99) {
    console.log(num.toString())
    break
  }
  num = BigNum.sum(num, ONE)
}

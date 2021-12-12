import { getInput } from './lib'

function score(name: string) {
  return name.split('').reduce((s, c) => s + c.charCodeAt(0) - 64, 0)
}

getInput('22').then((data) => {
  const sum = data
    .toString()
    .replace(/"/g, '')
    .split(',')
    .sort()
    .map((n, i) => (1 + i) * score(n))
    .reduce((s, n) => s + n)
  
  console.log(sum)
})

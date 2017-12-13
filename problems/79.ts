import * as fs from 'fs'
import * as path from 'path'

fs.readFile(path.join(__dirname, '../input/79.txt'), (err, data) => {
  if (err) { throw err }

  const logins = new Set(data.toString().trim().split('\n').sort())

  const constraints: { [k: string]: Set<string> } = {}

  for (const login of logins) {
    const [a, b, c] = login

    if (!constraints[b]) {
      constraints[b] = new Set()
    }
    if (!constraints[c]) {
      constraints[c] = new Set()
    }

    constraints[b].add(a)
    constraints[c].add(b)
  }

  const sorted = Object
    .keys(constraints)
    .sort((aK, bK) => {
      const a = constraints[aK]
      const b = constraints[bK]
      if (a.size === b.size) {
        return a.has(bK) ? 1 : -1
      } else {
        return a.size - b.size
      }
    })

  const first = constraints[sorted[0]].values().next().value

  console.log(first + sorted.join(''))
})

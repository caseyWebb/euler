export { }

const memo = new Map<string, number>()

function traverse(max: number, coords = [0, 0]): number {
  const [x, y] = coords
  if (memo.has(coords.toString())) {
    return memo.get(coords.toString()) as number
  }
  if (x === max && y === max) {
    memo.set([x, y].toString(), 1)
    return 1
  }

  let routesToTheRight = 0
  let routesDown = 0
  if (x < max) {
    routesToTheRight = traverse(max, [x + 1, y])
  }
  if (y < max) {
    routesDown = traverse(max, [x, y + 1])
  }

  const totalRoutes = routesToTheRight + routesDown
  memo.set([x, y].toString(), totalRoutes)
  return totalRoutes
}

console.log(traverse(20))
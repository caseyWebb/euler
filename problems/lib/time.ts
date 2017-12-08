let i = 0

export function time(label: string, fn: () => void): void
export function time(fn: () => void): void
export function time(arg1: any, arg2?: any): void {
  let fn: () => void
  let label: string = '#' + (i++).toString()
  if (arg2) {
    label = arg1
    fn = arg2
  } else {
    fn = arg1
  }
  console.log(`Start ${label}`)
  const start = process.hrtime()
  fn()
  const [seconds, nanoseconds] = process.hrtime(start)
  console.log(`Finished ${label} in ${seconds}.${padNanoSeconds(nanoseconds)}s`)
}

function padNanoSeconds(n: number) {
  let nStr = n.toString()
  while (nStr.length < 9) {
    nStr = '0' + nStr
  }
  return nStr
}

// this is not in the spirit of project Euler, but hey...

const day = new Date('1/1/1901')
const end = new Date('1/1/2001')
let sundaysOnTheFirst = 0

while (day < end) {
  if (day.getDay() === 0) {
    sundaysOnTheFirst++
  }
  day.setMonth(day.getMonth() + 1)
}

console.log(sundaysOnTheFirst)
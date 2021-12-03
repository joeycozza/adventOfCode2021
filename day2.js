const fs = require('fs')

const info = fs
  .readFileSync('./input/day2.txt', 'utf8')
  .split('\n')
  .filter(Boolean)
  .map((line) => {
    const [dir, num] = line.split(' ')
    return { dir, num: Number(num) }
  })

let horizontal = 0
let depth = 0
let aim = 0

info.forEach(({ dir, num }) => {
  if (dir === 'forward') {
    horizontal += num
    depth += aim * num
  } else if (dir === 'down') {
    aim += num
  } else if (dir === 'up') {
    aim -= num
  }
})

console.log('horizontal: ', horizontal)
console.log('depth: ', depth)
console.log('horizontal * depth: ', horizontal * depth)

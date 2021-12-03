const fs = require('fs')

const nums = fs.readFileSync('./input/day1.txt', 'utf8').split('\n').filter(Boolean).map(Number)
// const nums = fs.readFileSync('./input/day1b.txt', 'utf8').split('\n').filter(Boolean).map(Number)

const increaseCount = nums.reduce((sum, curNum, curIndex, array) => {
  if (curIndex === 0 || curIndex + 1 > array.length) {
    return sum
  }
  if (getWindow(curIndex, array) > getWindow(curIndex - 1, array)) {
    sum += 1
  }

  return sum
}, 0)

function getWindow(i, arr) {
  const a = arr[i] || 10000
  const b = arr[i + 1] || 10000
  const c = arr[i + 2] || 10000
  return a + b + c
}

console.log('increaseCount: ', increaseCount)

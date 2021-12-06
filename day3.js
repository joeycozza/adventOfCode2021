const _ = require('lodash')
const fs = require('fs')

const lines = fs.readFileSync('./input/day3.txt', 'utf8').split('\n').filter(Boolean)

const bitLength = lines[0].length
const inputLength = lines.length
let oxyGenRating
let c02Rating

let currentLines = _.cloneDeep(lines)

let i = 0
while (currentLines.length > 1) {
  let commonBit = mostCommonBit(currentLines, i)
  if (commonBit === '-1') {
    commonBit = '1'
  }
  currentLines = currentLines.filter((line) => {
    return line[i] === commonBit
  })
  i++
}
oxyGenRating = currentLines[0]

currentLines = _.cloneDeep(lines)
i = 0
while (currentLines.length > 1) {
  let commonBit = leastCommonBit(currentLines, i)
  if (commonBit === '-1') {
    commonBit = '0'
  }
  currentLines = currentLines.filter((line) => {
    return line[i] === commonBit
  })
  i++
}
c02Rating = currentLines[0]

console.log('oxyGenRating: ', oxyGenRating)
console.log('c02Rating: ', c02Rating)
console.log('countBinary(oxyGenRating): ', countBinary(oxyGenRating))
console.log('countBinary(c02Rating): ', countBinary(c02Rating))

function leastCommonBit(array, index) {
  const commonBit = mostCommonBit(array, index)
  return commonBit === '1' ? '0' : commonBit === '0' ? '1' : '-1'
}

function mostCommonBit(array, index) {
  const oneCount = array.reduce((sum, line) => {
    if (line[index] === '1') {
      sum += 1
    }
    return sum
  }, 0)
  const zeroCount = array.length - oneCount
  return oneCount > zeroCount ? '1' : zeroCount > oneCount ? '0' : '-1'
}

function countBinary(bits) {
  return _.reduceRight(
    bits,
    (sum, bit, index) => {
      const power = bits.length - (index + 1)
      if (bit === '0') {
        return sum
      } else {
        return sum + 2 ** power
      }
    },
    0
  )
}

const _ = require('lodash')
const fs = require('fs')

const lines = fs.readFileSync('./input/day3b.txt', 'utf8').split('\n').filter(Boolean)

const bitLength = lines[0].length
const inputLength = lines.length
const gamma = []
const epsilon = []

for (let i = 0; i < bitLength; i++) {
  const oneCount = lines.reduce((sum, line) => {
    if (line[i] === '1') {
      sum += 1
    }
    return sum
  }, 0)
  const zeroCount = inputLength - oneCount

  if (oneCount > zeroCount) {
    mostCommon = '1'
    leastCommon = '0'
  } else {
    mostCommon = '0'
    leastCommon = '1'
  }
  gamma.push(mostCommon)
  epsilon.push(leastCommon)
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

console.log('gamma: ', gamma)
console.log('countBinary(gamma): ', countBinary(gamma))
console.log('epsilon: ', epsilon)
console.log('countBinary(epsilon): ', countBinary(epsilon))
console.log(' countBinary(gamma) * countBinary(epsilon): ', countBinary(gamma) * countBinary(epsilon))

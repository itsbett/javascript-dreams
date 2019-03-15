/* this program will take a 2d array and flatten it into a 1d array */
console.log('Test is online.')
let test = [
  [11, 12, 13],
  [21, 22, 23],
  [31, 32, 33]
]

function flatten (array) {
  return array.reduce((a, b) => a.concat(b), [])
}

console.log(flatten(test))

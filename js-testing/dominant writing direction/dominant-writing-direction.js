/* Takes an array and a function as the argument, the function should be a test that returns a category
for each element it tests. countBy will create a list for each category and count how many times it
occurs in the array. */
function countBy (items, groupName) {
  let counts = []
  for (let item of items) {
    let name = groupName(item)
    let known = counts.findIndex(c => c.name === name)
    if (known === -1) {
      counts.push({ name, count: 1 })
    } else {
      counts[known].count++
    }
  }
  return counts
}

// characterScript takes a unicode argument and returns the language it belongs to by searching SCRIPTS from scripts.js
function characterScript (code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to
    })) {
      return script
    }
  }
  return null
}

/* countDirections takes any string as an argument. countDirections iterates through each letter of the argument, checks what language the character belongs to,
then checks how that language is read (e.g. left to right, right to left, top to bottom). It returns a list with a total count for how each character is read */
function countDirections (text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0))
    return script ? script.direction : 'none'
  }).filter(({ name }) => name !== 'none')

  let total = scripts.reduce((n, { count }) => n + count, 0)
  if (total === 0) return 'No scripts found'
  return scripts
}

/* dominantDirection takes any string as it's argument and returns the most dominent direction it is read */
function dominantDirection (str) {
  let scripts = countDirections(str)
  let count2 = 0
  let name = ''
  for (let element of scripts) {
    if (element.count > count2) {
      count2 = element.count
      name = element.name
    }
  }
  return name
}

function getDominantDirection () {
  let str = document.getElementById('string').value
  str = dominantDirection(str)
  document.getElementById("string").value = str
}
console.log(dominantDirection('Hello!'))
// → ltr (since all of the characters are read left to right)
console.log(dominantDirection('Hey, مساء الخير'))
// → rtl (since the majority of the characters are read right to left)

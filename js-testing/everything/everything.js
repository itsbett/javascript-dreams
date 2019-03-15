let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Takes a test function and an array; checks every element in the array with the function.
function isEverything (test, array) {
  return array.every(test)
}

function isInt (x) {
  if (typeof x === 'number' && x % 1 === 0) { // checks if the value is a number and if it's an integer (evenly divisible by 1)
    return true
  } else {
    return false
  }
}

function every (array, test) {
	for (let element of array) {
		if (!test(element)) {
			return false
		}
	}
	return true
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

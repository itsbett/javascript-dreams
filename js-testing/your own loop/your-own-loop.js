/* Higher level function that takes a value, a test condition, a function that updates the value, and an output function, then
creates a looping function with those values until the test condition is false. */
function loop (val, test, update, body) {
  while (test(val)) {
    body(val)
    val = update(val)
  }
}

loop(3, n => n > 0, n => n - 1, console.log)

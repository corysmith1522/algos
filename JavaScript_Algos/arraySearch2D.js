// Write a function that takes a 2-dimensional array and searches each 2D element for the character "X"
// Return the total number of occurrences of the string "X" (capitalized) inside of the 2D array.

function arraySearch2D(array) {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    let innerLength = array[i].length;
    for (let j = 0; j < innerLength; j++) {
      if (array[i][j] === 'X') {
        count++
      }
    }
  }
  return count;
}

console.log(arraySearch2D([[
  "X", "O", "O", "O", "X", "O"],
["O", "X", "O", "O", "O", "O"],
["O", "O", "O", "O", "X", "X"],
["O", "O", "O", "O", "O", "O"]
]))
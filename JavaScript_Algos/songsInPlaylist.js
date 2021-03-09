// Write a function that takes an array of numbers, each representing a duration of a song.
// Return the maximum number of songs present in the array that can fit into a 60-minute playlist
// Ex: Given array [3, 4, 7, 2], the sum of all the values is 16, which is less than 60. All elements are used, so the answer is 4.


function mostSongsInPlaylist(array) {
  const target = 60;
  let addedValues = 0
  let counter = 0
  array.sort();
  for (let i = 0; i < array.length; i++) {
    if (addedValues + array[i] <= target) {
      addedValues += array[i]
      counter++
    }
  }
  return counter;
}

console.log(mostSongsInPlaylist([4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3]))
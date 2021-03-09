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
// Have an array of songs
// Create a function that every time you call a random song name, the song shows up on the page

function randomSong() {
  const songs = ['Got What I Got', 'Big Green Tractor', "Don't You Wanna Stay", 'Lights Come On', 'Dirt Road Anthem', 'Hicktown', 'Johnny Cash', 'Tattoos on this Town', 'Fly Over States', 'Amarillo Sky']
  const random = Math.floor(Math.random() * songs.length)
  return songs[random]
}
// console.log(randomSong())